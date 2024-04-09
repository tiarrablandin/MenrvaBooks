from dataclasses import dataclass
from typing import List, Optional

from src.models.author import User

@dataclass
class Keyword:
    id: int = 0
    name: str = ""

@dataclass
class Genre:
    id: int = 0
    name: str = ""

@dataclass
class Series:
    id: int = 0
    name: str = ""

@dataclass
class Author:
    penName: str
    photo: Optional[str]
    bio: str
    user: User
    id: int = 0

@dataclass
class BookSummary:
    id: int
    title: str
    cover: str
    keywords: List[Keyword]
    genres: List[Genre]
    series: Series
    authors: List[Author]
