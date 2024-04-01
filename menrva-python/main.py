from book_fetcher import  fetch_full_books_by_work_id, fetch_popular_books_from_ol_by_genre
from book_processor import fetch_editions_for_work_id, filter_recent_editions
from data_persistence import insert_books_into_database


def process_popular_books_by_genre(genre):
    books = fetch_popular_books_from_ol_by_genre(genre)

    for book in books:
        full_book = fetch_full_books_by_work_id(book.get('work_id'))
        print(f"FULL BOOK INSIDE MAIN: {full_book}")
        print(f"BOOK INSIDE MAIN: {book}")
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

        insert_books_into_database([book_object])

if __name__ == "__main__":
    process_popular_books_by_genre("Fiction")