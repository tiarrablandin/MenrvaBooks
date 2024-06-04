import requests

from src.models.book_summary import Author, BookSummary, Genre, Keyword, Series


'''
FETCH BOOK INFO
'''

def fetch_book_summaries():
    url = "http://localhost:8085/api/books/summary"
    response = requests.get(url)
    book_summaries = []

    if response.status_code == 200:
        data = response.json()
        for item in data:
            print(item)
            # series_name = item['series']['name'] if item['series'] is not None and 'name' in item['series'] else None
            book_summary = BookSummary(
                id=item['id'],
                title=item['title'],
                cover=item['cover'],
                series=Series(id=item['series']['id'], name=item['series']['name'] ) if item['series'] is not None else None,
                authors=[Author(id=author['id'], penName=author['penName'], photo=author.get('photo'), bio=author['bio'], user=author['user']) for author in item['authors']],
                keywords=[Keyword(id=keyword['id'], name=keyword['name']) for keyword in item['keywords']],
                genres=[Genre(id=genre['id'], name=genre['name']) for genre in item['genres']]
            )
            book_summaries.append(book_summary)
    else:
        print(f"Failed to fetch book summaries, status code: {response.status_code}")

    return book_summaries