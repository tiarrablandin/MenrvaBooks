import requests

from src.utils.helpers import parse_publication_date


'''
FETCH BOOK INFO
'''

def fetch_popular_books_from_ol_by_genre(genre):
    books = []
    url = f'https://openlibrary.org/search.json?subject={genre}&limit=250'
    response = requests.get(url, timeout=30)
    if response.status_code == 200:
        results = response.json()['docs']
        for result in results:
            cover_id = result.get('cover_i')
            book = {
                'title': result.get('title'),
                'cover': get_cover_url_by_cover_id(cover_id),
                'publish_year': result.get('first_publish_year'),
                'description': result.get('first_sentence'),
                'median_page_count': result.get('number_of_pages_median'),
                'work_id': result.get('key').split('/')[-1]
            }
            books.append(book)
        return books
    else:
        print(f"Failed to fetch data from Open Library, status code: {response.status_code}")

def fetch_work_id_for_title(title):
    url = f"https://openlibrary.org/search.json?title={title.replace(' ', '+')}&limit=5"
    response = requests.get(url)
    if response.status_code == 200:
        results = response.json()['docs']
        selected_work = results[0] if results else None

        return selected_work['key'] if selected_work else None
    else:
        print(f"Failed to fetch search results, status code: {response.status_code}")
        return []

def fetch_full_books_by_work_id(work_id):
    url = f"https://openlibrary.org/works/{work_id}/editions.json"
    response = requests.get(url)
    if response.status_code == 200:
        editions = response.json()['entries']
        for edition in editions:
            print(f"EDITION: {edition}")
            if 'languages' in edition and any(lang.get('key') == "/languages/eng" for lang in edition['languages']):
                cover_id = edition.get('covers', [None])[0]
                cover_url = f"http://covers.openlibrary.org/b/id/{cover_id}-L.jpg" if cover_id else None
                publish_date = edition.get('publish_date', "")
                # Additional logic to validate publish_date format
                description = edition.get('description', {}).get('value') if isinstance(edition.get('description'), dict) else edition.get('description')
                page_count = edition.get('number_of_pages')
                book = {
                    'cover': cover_url,
                    'title': edition.get('title'),
                    'description': description,
                    'page_count': page_count,
                    'publication_date': parse_publication_date(publish_date),
                }
                if cover_url and publish_date and description and page_count:
                    return book  # Returns the first edition that meets all criteria
    return None  # Return None if no suitable edition is found

def fetch_editions_for_work_id(work_id):
    url = f"https://openlibrary.org/{work_id}/editions.json"
    response = requests.get(url)
    if response.status_code == 200:
        editions = response.json()['entries']
        return editions
    else:
        print(f"Failed to fetch editions, status code: {response.status_code}")
        return []

'''
FETCH COVER INFO
'''

def get_cover_url_by_cover_id(cover_id, size="L"):
    return f"https://covers.openlibrary.org/b/id/{cover_id}-{size}.jpg"

def get_cover_url_by_ol_id(ol_id, size="L"):
    return f"https://covers.openlibrary.org/b/olid/{ol_id}-{size}.jpg"

def get_cover_url_by_isbn(isbn, size="L"):
    return f"https://covers.openlibrary.org/b/isbn/{isbn}-{size}.jpg"

def get_goodreads_cover_url_by_isbn(goodreads_id, size="L"):
    return f"https://covers.openlibrary.org/b/goodreads/{goodreads_id}-{size}.jpg"