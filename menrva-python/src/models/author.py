from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    username: str
    firstName: str
    lastName: str

@dataclass
class Author:
    id: int
    user: Optional[User]
    penName: str
    bio: str = ''
    photo: str = ''