import { BookResponse } from "../lib/models/book";
import { User } from "../lib/models/user";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const url = baseUrl + "/api";

// * BOOKS

export async function fetchBooks(): Promise<BookResponse[]> {
  const response = await fetch(`${url}/books`);
  return response.json();
}

export async function fetchNewReleases(): Promise<BookResponse[]> {
  const response = await fetch(`${url}/books/newReleases`);
  return response.json();
}

export async function fetchSearchResults(searchTerm: string): Promise<BookResponse[]> {
  const response = await fetch(`${url}/books/search/${searchTerm}`);
  return response.json();
}

// * AUTHORS

export async function fetchAuthors(searchTerm: string): Promise<BookResponse[]> {
  const response = await fetch(`${url}/authors/search/${searchTerm}`);
  return response.json();
}

export async function authenticate(username: string, password: string): Promise<{ jwt: string, user: User }> {
  try {
    const response = await fetch(`${baseUrl}/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    return response.json();
  } catch (error) {
    console.error("Unable to log in: ", error);
    throw error;
  }
}