import { BookResponse } from "@/data/BookResponse";

export async function fetchBooks(): Promise<BookResponse[]> {
  const response = await fetch("http://localhost:8085/api/books");
  return response.json();
}

export async function fetchNewReleases(): Promise<BookResponse[]> {
  const response = await fetch("http://localhost:8085/api/books/newReleases");
  return response.json();
}
