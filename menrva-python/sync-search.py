import mysql.connector
from elasticsearch import Elasticsearch

db_config = {
    'host': 'localhost',
    'user': 'user2',
    'password': 'test',
    'database': 'menrvadb',
    'port': 3306
}
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

es = Elasticsearch("http://3.133.142.200:9200")


query = "SELECT * FROM book"
cursor.execute(query)
books = cursor.fetchall()


for book in books:
    id, cover, title, description, page_count, publication_date, date_added, reviewed, date_updated, series_id = book
    document = {
        "id": id,
        "cover": cover,
        "title": title,
        "description": description,
        "page_count": page_count,
        "publication_date": publication_date,
        "date_added": date_added,
        "reviewed": bool(reviewed),
        "date_updated": date_updated,
        "series_id": series_id
    }
    response = es.index(index="books", id=id, document=document)
    print(response['result'])


conn.close()


# Example with a JOIN


# SELECT b.*, a.name AS author_name, a.bio AS author_bio, s.name AS series_name, s.part
# FROM books b
# LEFT JOIN authors a ON b.author_id = a.id
# LEFT JOIN series s ON b.series_id = s.id


# cursor.execute(query)
# books = cursor.fetchall()

# for book in books:
#     # Assuming 'book' is a tuple of values corresponding to the columns selected in the SQL query
#     book_doc = {
#         "title": book[0],  # Adjust indices based on your query and table structure
#         "description": book[1],
#         "author": {
#             "name": book['author_name'],  # Adjust keys based on your query aliases
#             "bio": book['author_bio']
#         },
#         "series": {
#             "name": book['series_name'],
#             "part": book['part']
#         }
#         # Include other fields as necessary
#     }

#     # Index the book document in Elasticsearch
#     es.index(index="books", document=book_doc)
