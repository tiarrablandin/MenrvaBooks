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

export async function fetchRecommendationsForUser(username: string): Promise<BookResponse[]> {
  const response = await fetch(`${url}/recommendations/forUser?username=${username}`);
  return response.json();
}
//fetchTBR through user for user home
//fetchUpcomingReleases through user for user home
//fetchSeriesInProgress through user for user home
//fetchRecommendationsBasedOffPastReads through user for user home
//fetchGenres through user for user home- there will be a few of these
//fetchRead through user for user home

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