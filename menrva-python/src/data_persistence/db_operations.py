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
# es = Elasticsearch("http://3.137.26.103:9200")


def insert_books_into_database(books=[]):
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            for book in books:
                print(f"BOOK INSIDE INSERT BOOKS INTO DATABASE: {books}")
                title = book.get('title', 'Unknown Title')
                # authors = ', '.join(book.get('creator', ['Unknown Author']))  # Join multiple authors
                cover = book.get('cover', '')
                description = book.get('description', 'No description available.')
                page_count = book.get('page_count')
                publication_date = book.get('publication_date', '1900')
                # Check if the publication_date is just a year and format it
                if publication_date.isdigit() and len(publication_date) == 4:
                    publication_date = f"{publication_date}-01-01"  # Defaulting to January 1st
                date_added = datetime.now().strftime('%Y-%m-%d')
                reviewed = 0
                date_updated = date_added  # Using the same date as added for simplicity
                series_id = None  # need additional logic to handle series
                # author = ', '.join(book['creator']) if isinstance(book.get('creator'), list) else book.get('creator', 'No author available')

                insert_query = """
                INSERT IGNORE INTO book (cover, title, description, page_count, publication_date, date_added, reviewed, date_updated, series_id)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                """
                book_data = (cover, title, description, page_count, publication_date, date_added, reviewed, date_updated, series_id)

                print(f"BOOK DATA: {book_data}")

                cursor.execute(insert_query, book_data)
                conn.commit()

                book_id = cursor.lastrowid

                print(f"BOOK ID: {book_id}")


def insert_author_into_database(author_name):
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            date_created = datetime.now().strftime('%Y-%m-%d')


            insert_query = """
            INSERT IGNORE INTO author (pen_name, date_created, reviewed) VALUES (%s, %s, %s)
            """
            cursor.execute(insert_query, (author_name, date_created, 0))
            conn.commit()

            author_id = cursor.lastrowid
            print(f"Author ID: {author_id}")
            return author_id