import re
from datetime import datetime

def clean_date_string(date_str):
    # Remove any characters that are not digits or date separators (- or /)
    return re.sub(r"[^\d\-/]", "", date_str)

def parse_publication_date(date_str):
    # First, clean the date string to remove unexpected characters
    cleaned_date_str = clean_date_string(date_str)
    
    # Try parsing the cleaned_date_str in various formats
    for fmt in ("%Y-%m-%d", "%Y-%m", "%Y"):
        try:
            # If parsing succeeds, return the date in 'YYYY-MM-DD' format
            return datetime.strptime(cleaned_date_str, fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue  # Try the next format
    
    return "1900-01-01"  # Default date if parsing fails

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

    return recent_editions