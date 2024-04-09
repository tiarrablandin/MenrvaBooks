from dataclasses import dataclass

@dataclass
class Author:
    name: str
    bio: str = ''  # Optional field with a default value
    photo_url: str = ''  # Optional field with a default value
    # Add more fields as needed
