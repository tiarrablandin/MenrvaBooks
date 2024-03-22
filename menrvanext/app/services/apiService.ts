import { BookResponse } from "../lib/bookResponse";

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