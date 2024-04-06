import re
from datetime import datetime

def get_cover_url_by_cover_id(cover_id, size="L"):
    return f"https://covers.openlibrary.org/b/id/{cover_id}-{size}.jpg"

def get_cover_url_by_ol_id(ol_id, size="L"):
    return f"https://covers.openlibrary.org/b/olid/{ol_id}-{size}.jpg"

def get_cover_url_by_isbn(isbn, size="L"):
    return f"https://covers.openlibrary.org/b/isbn/{isbn}-{size}.jpg"

def get_goodreads_cover_url_by_isbn(goodreads_id, size="L"):
    return f"https://covers.openlibrary.org/b/goodreads/{goodreads_id}-{size}.jpg"

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
