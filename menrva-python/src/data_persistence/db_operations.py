from datetime import datetime
import mysql.connector

db_config = {
    'host': 'localhost',
    'user': 'user2',
    'password': 'test',
    'database': 'menrvadb',
    'port': 3306
}

def insert_books_into_database(books=[]):
    book_ids = []  # List to store the book IDs
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            for book in books:
                print(f"&&&&&&&&&&&&&&&&&&&&: {book.get('page_count')}")
                title = book.get('title', 'Unknown Title')
                # authors = ', '.join(book.get('creator', ['Unknown Author']))  # Join multiple authors
                cover = book.get('cover', '')
                description = book.get('description', 'No description available.')
                page_count = int(book.get('page_count'))
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

                if book_id:
                    book_ids.append(book_id)

    return book_ids


def insert_author_into_database(author):
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            author_name = author.get('name')
            date_added = datetime.now().strftime('%Y-%m-%d')
            photo = f'https://covers.openlibrary.org/b/id/{author.get("photos")[0]}-L.jpg' if author.get("photos") else None
            bio = author.get('bio').get('value') if isinstance(author.get('bio'), dict) else author.get('bio')

            insert_query = """
            INSERT IGNORE INTO author (pen_name, photo, bio, date_added, reviewed) VALUES (%s, %s, %s, %s, %s)
            """
            cursor.execute(insert_query, (author_name, photo, bio, date_added, 0))
            conn.commit()

            author_id = cursor.lastrowid
            return author_id

def link_author_and_book(author_id, book_id):
    with mysql.connector.connect(**db_config) as conn:
        with conn.cursor() as cursor:
            insert_query = """
            INSERT IGNORE INTO author_has_book (author_id, book_id) VALUES (%s, %s)
            """
            cursor.execute(insert_query, (author_id, book_id))
            conn.commit()

            author_book_id = cursor.lastrowid
            return author_book_id