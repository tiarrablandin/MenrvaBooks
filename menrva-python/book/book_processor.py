import requests
from datetime import datetime

def fetch_editions_for_work_id(work_id):
    url = f"https://openlibrary.org/{work_id}/editions.json"
    response = requests.get(url)
    if response.status_code == 200:
        editions = response.json()['entries']
        print(f"EDITIONS INSIDE FETCH EDITIONS FOR WORK ID: {editions}")
        return editions
    else:
        print(f"Failed to fetch editions, status code: {response.status_code}")
        return []

def filter_recent_editions(editions, years=25, language_code='eng'):
    recent_editions = []
    current_year = datetime.now().year
    for edition in editions:
        publish_year = edition.get('publish_date', '')
        try:
            # If publish_year is just a year (e.g., "2021"), this will work directly
            # If publish_year includes more than just a year (e.g., "July 2021"), this will attempt to extract the year part
            year = int(publish_year if publish_year.isdigit() else publish_year.split()[-1]) if publish_year else None

            if year is not None and current_year - year <= years:
                if any(lang.get('key', '').endswith(f"/languages/{language_code}") for lang in edition.get('languages', [])):
                    recent_editions.append(edition)
        except ValueError:
            continue

    print(f"RECENT EDITIONS INSIDE FILTER RECENT EDITIONS: {editions[0]}")
    return recent_editions