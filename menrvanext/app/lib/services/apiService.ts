import { Author } from "../models/author";
import { BookResponse } from "../models/book";
import { User } from "../models/user";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const url = baseUrl + "/api";

// * BOOKS

export async function fetchBookById(id: number): Promise<BookResponse> {
  const response = await fetch(`${url}/books/${id}`);
  return response.json();
}

export async function fetchBooks(): Promise<BookResponse[]> {
  const response = await fetch(`${url}/books/summary`);
  return response.json();
}

export async function fetchNewReleases(): Promise<BookResponse[]> {
  const response = await fetch(`${url}/books/newReleases`);
  return response.json();
}

export async function fetchSearchResults(searchTerm: string): Promise<BookResponse[]> {
  const response = await fetch(`${url}/search/books?title=${searchTerm}`);
  return response.json();
}

export async function fetchRecommendationsForUser(tag: string): Promise<BookResponse[]> {
  const response = await fetch(`${url}/recommendations/forUser?tag=${tag}`);
  return response.json();
}

export async function fetchLikedBooksForUser(tag: string) {
  const response = await fetch(`${url}/users/${tag}/liked-books`);
  const interactions = response.json()
  console.log(interactions)
  return interactions;
}

export async function addBook(book: BookResponse) {
  const response = await fetch(`${url}/books`)
}

//fetchTBR through user for user home
//fetchUpcomingReleases through user for user home
//fetchSeriesInProgress through user for user home
//fetchRecommendationsBasedOffPastReads through user for user home
//fetchGenres through user for user home- there will be a few of these
//fetchRead through user for user home

// * AUTHORS

export async function fetchAuthors(): Promise<Author[]> {
  const response = await fetch(`${url}/authors`);
  return response.json();
}

export async function fetchAuthorById(id: number): Promise<Author> {
  const response = await fetch(`${url}/authors/${id}`);
  return response.json();
}

export async function authenticate(tag: string, password: string): Promise<{ jwt: string, user: User }> {
  try {
    const response = await fetch(`${baseUrl}/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag, password }),
    })
    return response.json();
  } catch (error) {
    console.error("Unable to log in: ", error);
    throw error;
  }
}