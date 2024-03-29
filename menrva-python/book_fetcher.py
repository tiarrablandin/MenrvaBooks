import requests


def fetch_books_from_ia_by_genre(genre, languageCode="eng", rows=5):
    books = []
    url = f"https://archive.org/advancedsearch.php?q=collection:(inlibrary) AND subject:({genre}) AND mediatype:(texts)&fl[]=identifier,title,creator,date,language,subject&sort[]=downloads desc&rows={rows}&output=json"
    response = requests.get(url)
    if response.status_code == 200:
        books = response.json()['response']['docs']
        print(f"BOOKS INSIDE FETCH FROM IA: {books}")
        return books
    else:
        print(f"Failed to fetch data from Internet Archive, status code: {response.status_code}")

def fetch_popular_books_from_ol_by_genre(genre):
    books = []
    url = f'https://openlibrary.org/search.json?subject={genre}&limit=5'
    response = requests.get(url)
    if response.status_code == 200:
        books = response.json()['docs']
        print(f"BOOKS INSIDE FETCH POPULAR BOOKS FROM OPEN LIBRARY: {books}")
        return books
    else:
        print(f"Failed to fetch data from Open Library, status code: {response.status_code}")

def fetch_work_id_for_title(title):
    url = f"https://openlibrary.org/search.json?title={title.replace(' ', '+')}&limit=5"
    response = requests.get(url)
    if response.status_code == 200:
        results = response.json()['docs']
        print(f"RESULTS INSIDE FETCH WORK ID FOR TITLE: {results}")

        selected_work = results[0] if results else None
        print(f"SELECTED WORK INSIDE FETCH WORK ID FOR TITLE: {selected_work}")

        return selected_work['key'] if selected_work else None
    else:
        print(f"Failed to fetch search results, status code: {response.status_code}")
        return []