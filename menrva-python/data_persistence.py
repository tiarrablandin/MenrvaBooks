from elasticsearch import Elasticsearch
from datetime import datetime
import mysql.connector

db_config = {
    'host': 'localhost',
    'user': 'user2',
    'password': 'test',
    'database': 'menrvadb',
    'port': 3306
}
es = Elasticsearch("http://3.137.26.103:9200")


def insert_books_into_database(books=[]):
    print(f"BOOKS INSIDE INSERT BOOKS INTO DATABASE: {books}")
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            for book in books:
                title = book.get('title', 'Unknown Title')
                authors = ', '.join(book.get('creator', ['Unknown Author']))  # Join multiple authors
                cover = book.get('cover', '')
                description = book.get('description', 'No description available.')
                page_count = book.get('pageCount', 0)
                publication_date = book.get('publicationDate', '1900-01-01')
                date_added = datetime.now().strftime('%Y-%m-%d')
                reviewed = 0
                date_updated = date_added  # Using the same date as added for simplicity
                series_id = None  # need additional logic to handle series
                # author = ', '.join(book['creator']) if isinstance(book.get('creator'), list) else book.get('creator', 'No author available')

                insert_query = """
                INSERT INTO book (cover, title, description, page_count, publication_date, date_added, reviewed, date_updated, series_id)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                """
                book_data = (cover, title, description, page_count, publication_date, date_added, reviewed, date_updated, series_id)

                print(f"BOOK DATA: {book_data}")

                cursor.execute(insert_query, book_data)
                conn.commit()

                book_id = cursor.lastrowid

                print(f"BOOK ID: {book_id}")


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
    response = es.index(index="books", id=id, document=document)
    print(response['result'])
