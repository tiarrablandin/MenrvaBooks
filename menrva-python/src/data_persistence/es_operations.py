import logging
import ssl
from elasticsearch import Elasticsearch

from src.services.backend.book_service import fetch_book_summaries

cert_path = "../MenrvaBooks/es-cert.pem"

# Create a default SSL context
# context = ssl.create_default_context(capath=cert_path)
# context.check_hostname = False
# context.verify_mode = ssl.CERT_NONE

# context.load_verify_locations(cert_path)

es = Elasticsearch(
    [{"host": "34.135.112.113", "port": 9200, "scheme": "http"}],
    # ssl_context=context,
    request_timeout=120,
    basic_auth=('elastic', 'elastic'),
    verify_certs=False
)


#   CONSTRUCT ELASTICSEARCH DOCUMENT
def insert_books_into_elasticsearch(books=[]):
    print(f"BOOKS INSIDE INSERT BOOKS INTO ELASTICSEARCH: {books}")
    
    for book in books:
        try:
            document = {
                "id": book.id,
                "title": book.title,
                "series": {
                    "id": book.series.id,
                    "name": book.series.name
                } if book.series else None,
                "keywords": [{"id": keyword.id, "name": keyword.name} for keyword in book.keywords],
                "authors": [{
                    "id": author.id,
                    "penName": author.penName,
                } for author in book.authors]
            }

            response = es.index(index="books", id=book.id, document=document)
            logging.info(f"Indexed book {book.id}: {response['result']}")
        except Exception as e:
            logging.error(f"Error indexing book {book.id}: {str(e)}")

def sync_es_with_db():
    try:
        books = fetch_book_summaries()
        insert_books_into_elasticsearch(books)
        logging.info("Synchronization with Elasticsearch completed successfully.")
    except Exception as e:
        logging.error(f"Failed to synchronize with Elasticsearch: {str(e)}")



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