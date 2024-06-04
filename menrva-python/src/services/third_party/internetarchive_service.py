import requests


'''
FETCH BOOK INFO
'''

def fetch_books_from_ia_by_genre(genre, languageCode="eng", rows=5):
    books = []
    url = f"https://archive.org/advancedsearch.php?q=collection:(inlibrary) AND subject:({genre}) AND mediatype:(texts)&fl[]=identifier,title,creator,date,language,subject&sort[]=downloads desc&rows={rows}&output=json"
    response = requests.get(url)
    if response.status_code == 200:
        books = response.json()['response']['docs']
        return books
    else:
        print(f"Failed to fetch data from Internet Archive, status code: {response.status_code}")