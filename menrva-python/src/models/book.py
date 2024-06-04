from dataclasses import dataclass

@dataclass
class Book:
    cover: str
    title: str
    description: str
    page_count: int
    publication_date: str
    authors: list  # List of Author objects or author names
