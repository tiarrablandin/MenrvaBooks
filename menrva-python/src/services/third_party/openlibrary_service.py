import requests

from src.utils.helpers import parse_publication_date


'''
FETCH BOOK INFO
'''

def fetch_popular_books_from_ol_by_genre(genre):
    books = []
    url = f'https://openlibrary.org/search.json?subject={genre}&limit=500'
    response = requests.get(url, timeout=30)
    if response.status_code == 200:
        results = response.json()['docs']
        for result in results:
            cover_id = result.get('cover_i')
            if result.get('language')[0] != "eng" or cover_id == "https://covers.openlibrary.org/b/id/-1-L.jpg": continue

            book = {
                'title': result.get('title'),
                'cover': get_cover_url_by_photo_id(cover_id),
                'publish_year': result.get('first_publish_year'),
                'description': result.get('first_sentence'),
                'page_count': result.get('number_of_pages_median'),
                'first_publish_year': result.get('first_publish_year'),
                'isbn': result.get('isbn', [None])[0],
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

def fetch_single_book_by_work_id(work_id):
    url = f"https://openlibrary.org/works/{work_id}.json"

    response = requests.get(url)
    if response.status_code == 200:
        work_data = response.json()

        authors = [author['author']['key'].split('/')[-1] for author in work_data.get('authors', [])]
        description = work_data.get('description', {}).get('value') if isinstance(work_data.get('description'), dict) else work_data.get('description')
        # genres = [genre for genre in work_data.get('subjects', []) if "fiction" in genre.lower()]
        # keywords = [keyword for keyword in work_data.get('subjects', []) if "fiction" not in keyword.lower()]

        book = {
            'title': work_data.get('title'),
            'cover': get_cover_url_by_photo_id(work_data.get('covers', [None])[0]),
            'description': description,
            'authors': authors,
            # 'genres': genres,
            # 'keywords': keywords
        }
        return book
    else:
        print(f"Failed to fetch work details, status code: {response.status_code}")
        return None

def fetch_full_books_by_work_id(work_id):
    url = f"https://openlibrary.org/works/{work_id}/editions.json"
    response = requests.get(url)
    if response.status_code == 200:
        work_data = response.json()

        authors = [author['author']['key'].split('/')[-1] for author in work_data.get('authors', [])]
        description = work_data.get('description', {}).get('value') if isinstance(work_data.get('description'), dict) else work_data.get('description')
        genres = [genre for genre in work_data.get('subjects', []) if "fiction" in genre.lower()]
        keywords = [keyword for keyword in work_data.get('subjects', []) if "fiction" not in keyword.lower()]

        book = {
            'title': work_data.get('title'),
            'cover': get_cover_url_by_photo_id(work_data.get('covers', [None])[0]),
            'description': description,
            'authors': authors,
            'genres': genres,
            'keywords': keywords
        }
        return book
    else:
        print(f"Failed to fetch work details, status code: {response.status_code}")
        return None

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

def get_cover_url_by_photo_id(photo_id, size="L"):
    return f"https://covers.openlibrary.org/b/id/{photo_id}-{size}.jpg"

def get_cover_url_by_ol_id(ol_id, size="L"):
    return f"https://covers.openlibrary.org/b/olid/{ol_id}-{size}.jpg"

def get_cover_url_by_isbn(isbn, size="L"):
    return f"https://covers.openlibrary.org/b/isbn/{isbn}-{size}.jpg"
