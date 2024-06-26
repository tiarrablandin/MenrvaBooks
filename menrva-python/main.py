from src.data_persistence.db_operations import insert_author_into_database, insert_books_into_database, link_author_and_book
from src.data_persistence.es_operations import sync_es_with_db
from src.services.author_service import fetch_author_by_pen_name, fetch_author_from_ol_by_book_title, fetch_author_from_ol_by_key
from src.services.third_party.openlibrary_service import fetch_single_book_by_work_id, fetch_popular_books_from_ol_by_genre
from datetime import date


def process_popular_books_by_genre(genre):
    books = fetch_popular_books_from_ol_by_genre(genre)

    for book in books:
        work_id = book.get('work_id')
        full_book = fetch_single_book_by_work_id(work_id)
        if full_book is None:
            continue

        # author_key = full_book.get('authors')[0]['author']['key'] if full_book.get('authors') else None

        authors = full_book.get('authors')
        # author_key = full_book.get('authors')
        # print(f"******** AUTHOR KEY: {author_key}")
        # author = fetch_author_from_ol_by_key(author_key)
        book_object = {
            'cover': full_book.get('cover'),
            'title': book.get('title'),
            'description': full_book.get('description', book.get('description')),
            'page_count': book.get('page_count'),
            'publication_date': str(book.get('first_publish_year', '1900-01-01')),
        }

        # insert_books_into_database([book_object])
        book_ids = insert_books_into_database([book_object])
        if authors and book_ids != []:
            for author_key in authors:
                author = fetch_author_from_ol_by_key(author_key)
                db_authors = fetch_author_by_pen_name(author.get('name'))
                if len(db_authors) > 0:
                    link_author_and_book(db_authors[0].get('id'), book_ids[0]) 
                else:
                    author_id = insert_author_into_database(author)
                    link_author_and_book(author_id, book_ids[0]) 
        else:
            continue

def process_author_by_book_title(book_title):
    author = fetch_author_from_ol_by_book_title(book_title)

if __name__ == "__main__":
    # process_popular_books_by_genre("Fantasy")
    # process_author_by_book_title("Lord of the Rings")
    sync_es_with_db()