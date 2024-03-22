import { BookResponse } from "../lib/models/book";

// * BOOKS

export async function fetchBooks(): Promise<BookResponse[]> {
  const response = await fetch("http://localhost:8085/api/books");
  return response.json();
}

export async function fetchNewReleases(): Promise<BookResponse[]> {
  const response = await fetch("http://localhost:8085/api/books/newReleases");
  return response.json();
}

export async function fetchSearchResults(searchTerm: string): Promise<BookResponse[]> {
  const response = await fetch("http://localhost:8085/api/books/search" + searchTerm);
  return response.json();
}

// * AUTHORS

export async function fetchAuthors(searchTerm: string): Promise<BookResponse[]> {
  const response = await fetch("http://localhost:8085/api/authors/search" + searchTerm);
  return response.json();
}