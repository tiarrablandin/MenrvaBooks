import requests


def fetch_author_from_ol_by_book_title(book_title):
    url = f'https://openlibrary.org/search.json?title={book_title}&limit=1'
    response = requests.get(url, timeout=30)
    if response.status_code == 200:
        book = response.json()['docs'][0]
        url = f'https://openlibrary.org/search/authors.json?q={book.get('author_name')[0]}'
        response = requests.get(url, timeout=30)
        if response.status_code == 200:
            author = response.json()['docs'][0]
            print(f"AUTHOR INFO IN FETCH: {author}")
            return author
    else:
        print(f"Failed to fetch data from Open Library, status code: {response.status_code}")

def fetch_author_from_ol_by_key(key):
    url = f'https://openlibrary.org/authors/{key}.json'
    response = requests.get(url, timeout=30)
    if response.status_code == 200:
        author = response.json()
        return author
    else:
        print(f"Failed to fetch author from Open Library, status code: {response.status_code}")

def fetch_books_from_author_by_key(key):
    url = f'https://openlibrary.org/{key}/works.json?limit=25'
    response = requests.get(url, timeout=30)
    if response.status_code == 200:
        books = response.json()['docs'][0]
        return books
    else:
        print(f"Failed to fetch author's books from Open Library, status code: {response.status_code}")

def fetch_author_by_pen_name(penName):
    url = f'http://localhost:8085/api/authors/name/{penName}'
    response = requests.get(url, timeout=30)

    if response.status_code == 200:
        authors = response.json()
        return authors
    else:
        print(f"Failed to fetch author by pen name, status code: {response.status_code}")