from elasticsearch import Elasticsearch

es = Elasticsearch(
    [{"host": "3.137.26.103", "port": 9200, "scheme": "https"}],
    request_timeout=120,
)


#   CONSTRUCT ELASTICSEARCH DOCUMENT
def insert_books_into_elasticsearch(books=[]):
    print(f"BOOKS INSIDE INSERT BOOKS INTO ELASTICSEARCH: {books}")
    
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
    # response = es.index(index="books", id=id, document=document)
    # print(response['result'])
    

def sync_es_with_db():
    books = []
    for book in books:
        print(book)
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