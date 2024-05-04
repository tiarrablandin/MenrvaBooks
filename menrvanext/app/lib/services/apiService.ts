'use server'

import { Author } from "../models/author";
import { BookResponse } from "../models/book";
import { BookInteraction } from "../models/bookInteraction";
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

export async function fetchLikedBooksForUser(tag: string): Promise<BookResponse[]> {
  const response = await fetch(`${url}/users/${tag}/liked-books`);
  return response.json();
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


// * USERS

export async function fetchUserById(id: number): Promise<User> {
  const response = await fetch(`${url}/users/${id}`);
  return response.json();
}

export async function fetchUserByTag(tag: string): Promise<User> {
  const response = await fetch(`${url}/users/${tag}/info`);
  return response.json();
}

// * INTERACTIONS

export async function toggleUserActive(userId: number, token: string) {
  try {
    const response = await fetch(`http://localhost:8085/api/users/${userId}/active`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to toggle liked status");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function toggleBookInterested(bookId: number, token: string) {
  try {
    const response = await fetch(`http://localhost:8085/api/books/${bookId}/interested`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to toggle liked status");
    }
    const data = await response.json();
    console.log(data);
    return { bookId, interested: data.interested };
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function toggleBookHasRead(bookId: number, token: string) {
  try {
    const response = await fetch(`http://localhost:8085/api/books/${bookId}/hasRead`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to toggle liked status");
    }
    const data = await response.json();
    console.log(data);
    return { bookId, hasRead: data.hasRead };
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function toggleBookLiked(bookId: number, status: number, token: string) {
  try {
    const response = await fetch(`http://localhost:8085/api/books/${bookId}/react?status=${status}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to toggle liked status");
    }
    const data = await response.json();
    console.log(data);
    return { bookId, liked: data.likeDislike === 1, disliked: data.likeDislike === -1 };
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function fetchBookInteractionsById(id: number, token: string): Promise<BookInteraction> {
  const response = await fetch(`${url}/books/${id}/interaction`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  return response.json();
}

export async function authenticate(identifier: string, password: string): Promise<{ jwt: string, user: User }> {
  try {
    const response = await fetch(`${baseUrl}/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    })
    return response.json();
  } catch (error) {
    console.error("Unable to log in: ", error);
    throw error;
  }
}

// * COMMENTS
export async function fetchCreateComment(comment: string, bookId: number, token: string) {
  try {
    const response = await fetch(`http://localhost:8085/api/comments`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment, bookId })
    })
    if (!response.ok) {
      throw new Error("Failed to fetch authors.")
    }
    return await response.json();
  } catch (error: any) {
    console.error(error.message);
  }
}