import { SimpleUpdateUserRequest } from './../models/user';
'use server'

import { Author } from "../models/author";
import { BookResponse } from "../models/book";
import { Comment } from '@/lib/models/comment';
import { User } from "../models/user";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const url = baseUrl + "/api";

// * AUTHORS

export async function fetchAuthors(): Promise<Author[] | null> {
  try {
    const response = await fetch(`${url}/authors`);
    if (!response.ok) {
      throw new Error('Failed to fetch authors.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchAuthorById(id: number): Promise<Author | null> {
  try {
    const response = await fetch(`${url}/authors/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch author details.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchAuthorBooksById(id: number): Promise<BookResponse[] | null> {
  try {
    const response = await fetch(`${url}/authors/${id}/books`);
    if (!response.ok) {
      throw new Error('Failed to fetch author details.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchUserFollowsAuthor(authorId: number, token: string): Promise<boolean | null> {
  try {
    const response = await fetch(`${url}/authors/${authorId}/follows`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    if (!response.ok) {
      throw new Error('Failed to fetch user follows author details.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// * USERS

export async function fetchUserById(id: number): Promise<User | null> {
  try {
    const response = await fetch(`${url}/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user details.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchUpdateUser(id: number, user: User | SimpleUpdateUserRequest, token: string): Promise<User | null> {
  try {
    const response = await fetch(`${url}/users/${id}/update`, {
      method: "PUT", 
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    if (!response.ok) {
      throw new Error('Failed to update user.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchUserByTag(tag: string): Promise<User | null> {
  try {
    const response = await fetch(`${url}/users/${tag}/info`);
    if (!response.ok) {
      throw new Error('Failed to fetch user by tag.');
    }

    const user = await response.json() as User;

    user ? user.tbrBooks = user?.bookInteractions
      .filter((interaction) => interaction.interested)
      .map((interaction) => interaction.book)
      : []

    user ? user.hasReadBooks = user?.bookInteractions
      .filter((interaction) => interaction.hasRead)
      .map((interaction) => interaction.book)
      : []

    user ? user.likedBooks = user?.bookInteractions
      .filter((interaction) => interaction.likeDislike === 1)
      .map((interaction) => interaction.book)
      : []

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchUserReadBooksByTag(tag: string): Promise<BookResponse[] | null> {
  try {
    const response = await fetch(`${url}/users/${tag}/read-books`);
    if (!response.ok) {
      throw new Error('Failed to fetch user read books by tag.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchUserInterestedBooksByTag(tag: string): Promise<BookResponse[] | null> {
  try {
    const response = await fetch(`${url}/users/${tag}/interested-books`);
    if (!response.ok) {
      throw new Error('Failed to fetch user interested books by tag.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


// * BOOKS

export async function fetchBookById(id: number): Promise<BookResponse | null> {
  try {
    const response = await fetch(`${url}/books/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch book details.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchBooks(): Promise<BookResponse[] | null> {
  try {
    const response = await fetch(`${url}/books/summary`);
    if (!response.ok) {
      throw new Error('Failed to fetch books summary.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchNewReleases(): Promise<BookResponse[] | null> {
  try {
    const response = await fetch(`${url}/books/newReleases`);
    if (!response.ok) {
      throw new Error('Failed to fetch new releases.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchSearchResults(searchTerm: string): Promise<BookResponse[] | null> {
  try {
    const response = await fetch(`${url}/search/books?title=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Failed to fetch search results.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchRecommendationsForUser(token: string): Promise<BookResponse[] | null> {
  try {
    const response = await fetch(`${url}/recommendations/user`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch recommendations for user.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchLikedBooksForUser(tag: string): Promise<BookResponse[] | null> {
  try {
    const response = await fetch(`${url}/users/${tag}/liked-books`);
    if (!response.ok) {
      throw new Error('Failed to fetch liked books for user.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function addBook(book: BookResponse): Promise<Response | null> {
  try {
    const response = await fetch(`${url}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    if (!response.ok) {
      throw new Error('Failed to add new book.');
    }
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}


//fetchTBR through user for user home
//fetchUpcomingReleases through user for user home
//fetchSeriesInProgress through user for user home
//fetchRecommendationsBasedOffPastReads through user for user home
//fetchGenres through user for user home- there will be a few of these
//fetchRead through user for user home


// * INTERACTIONS

export async function toggleUserActive(userId: number, token: string) {
  try {
    const response = await fetch(`${url}/users/${userId}/active`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to toggle liked status");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

export async function toggleBookInterested(bookId: number, token: string) {
  try {
    const response = await fetch(`${url}/books/${bookId}/interested`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }

    });
    if (!response.ok) {
      throw new Error("Failed to toggle interested status");
    }
    const data = await response.json();
    return { bookId, interested: data.interested };
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

export async function toggleBookHasRead(bookId: number, token: string) {
  try {
    const response = await fetch(`${url}/books/${bookId}/hasRead`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to toggle has read status");
    }
    const data = await response.json();
    return { bookId, hasRead: data.hasRead };
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

export async function toggleBookLiked(bookId: number, status: number, token: string) {
  try {
    const response = await fetch(`${url}/books/${bookId}/react?status=${status}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to toggle liked status");
    }
    const data = await response.json();
    return { bookId, liked: data.likeDislike === 1, disliked: data.likeDislike === -1 };
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}

export async function fetchBookInteractionsById(id: number, token: string) {
  try {
    const response = await fetch(`${url}/books/${id}/interaction`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch book interactions by id: " + id);
    }
    const data = await response.text(); // Fetch the data as text first
    return data ? JSON.parse(data) : null; // Parse it if not empty
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function authenticate(identifier: string, password: string): Promise<{ user: User, jwt: string } | null> {
  try {
    const response = await fetch(`${baseUrl}/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    })
    return response.json();
  } catch(error) {
    console.error("Unable to log in: ", error);
    return null;
  }
}

export async function registerUser(email: string, firstName: string, lastName: string, tag: string, password: string) {
  try {
    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, tag, firstName, lastName, password }),
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Unable to register: ", error);
    return null;
  }
}

// * COMMENTS

export async function fetchCreateComment(comment: string, bookId: number, token: string): Promise<Comment | undefined> {
  try {
    const response = await fetch(`${url}/comments`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment, bookId })
    })
    if (!response.ok) {
      throw new Error("Failed to create comment.")
    }
    return await response.json();
  } catch (error: any) {
    console.error(error.message);
    return undefined;
  }
}

// * SERIES

export async function fetchSeriesAll() {
  try {
    const response = await fetch(`${url}/series`);
    if (!response.ok) {
      throw new Error("Failed to fetch series.")
    }
    return await response.json();
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
}