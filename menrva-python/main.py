from book_fetcher import fetch_books_from_ia_by_genre, fetch_popular_books_from_ol_by_genre, fetch_work_id_for_title
from book_processor import fetch_editions_for_work_id, filter_recent_editions
from data_persistence import insert_books_into_database


def process_books_by_genre(genre):
    books = fetch_popular_books_from_ol_by_genre(genre)
    print(f"BOOKS INSIDE PROCESS BOOKS BY GENRE: {books}")

    for book in books:
        title = book.get('title')
        if title:
            work_id = fetch_work_id_for_title(title)
            if work_id:
                editions = fetch_editions_for_work_id(work_id)
                print(f"******************************************************** EDITIONS: {len(editions)} *****************************************************************")
                recent_editions = filter_recent_editions(editions)
                print(f"******************************************************** RECENT EDITIONS: {recent_editions} *****************************************************************")
                if recent_editions:
                    selected_edition = recent_editions[0]
                print(f"******************************************************** SELECTED EDITION: {selected_edition} *****************************************************************")
                    # insert_books_into_database([selected_edition])

if __name__ == "__main__":
    process_books_by_genre("Fantasy")