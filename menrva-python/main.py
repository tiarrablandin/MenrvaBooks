from src.data_persistence.db_operations import insert_author_into_database
from src.data_persistence.es_operations import sync_es_with_db
from src.services.author_service import fetch_author_from_ol_by_book_title
from src.services.third_party.openlibrary_service import fetch_full_books_by_work_id, fetch_popular_books_from_ol_by_genre


def process_popular_books_by_genre(genre):
    books = fetch_popular_books_from_ol_by_genre(genre)

    for book in books:
        full_book = fetch_full_books_by_work_id(book.get('work_id'))
        author = fetch_author_from_ol_by_book_title(book.get('title'))
        print(f"******** AUTHOR: {author}")
        if full_book is None: continue
        book_object = {
            'cover': full_book.get('cover'),
            'title': book.get('title'),
            'description': full_book.get('description', book.get('description')),
            'page_count': full_book.get('page_count', book.get('page_count')),
            'publication_date': full_book.get('publication_date', '1900-01-01'),
            # 'isbn': full_book.get('isbn_13', [None])[0]
            # get series info
        }

        # insert_books_into_database([book_object])
        insert_author_into_database(author.get('name'))

def process_author_by_book_title(book_title):
    author = fetch_author_from_ol_by_book_title(book_title)
    print(f"AUTHOR INSIDE MAIN: {author}")

if __name__ == "__main__":
    # process_popular_books_by_genre("Fantasy")
    # process_author_by_book_title("Lord of the Rings")
    sync_es_with_db()