import requests


def fetch_author_from_ol_by_book_title(book_title):
    url = f'https://openlibrary.org/search.json?title={book_title}&limit=1'
    response = requests.get(url, timeout=30)
    if response.status_code == 200:
        book = response.json()['docs'][0]
        print(f"AUTHOR NAME: {book.get("author_name")[0]}")
        url = f'https://openlibrary.org/search/authors.json?q={book.get('author_name')[0]}'
        response = requests.get(url, timeout=30)
        if response.status_code == 200:
            author = response.json()['docs'][0]
            print(f"AUTHOR INFO IN FETCH: {author}")
            return author
    else:
        print(f"Failed to fetch data from Open Library, status code: {response.status_code}")