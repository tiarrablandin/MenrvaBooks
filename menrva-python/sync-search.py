import mysql.connector
from elasticsearch import Elasticsearch

# db_config = {
#     'host': 'localhost',
#     'user': 'user2',
#     'password': 'test',
#     'database': 'menrvadb',
#     'port': 3306
# }
# conn = mysql.connector.connect(**db_config)
# cursor = conn.cursor()

es = Elasticsearch("http://3.133.142.200:9200")


query = {
    "query": {
        "match": {
            "title": "dark"
        }
    }
}

response = es.search(index="books", body=query)
for hit in response['hits']['hits']:
    print(hit['_source'])



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
