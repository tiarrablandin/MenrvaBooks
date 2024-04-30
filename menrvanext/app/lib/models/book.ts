import { Series } from "./series";
import { Comment } from "./comment";
import { Author } from "./author";

export interface BookResponse {
  id: number;
  cover: string;
  title: string;
  description: string;
  pageCount: number;
  isbn: number;
  publicationDate: Date;
  dateAdded: Date;
  dateUpdated: Date;
  reviewed: boolean;
  authors: Author[];
  series: Series;
  comments: Comment[];
}

export interface AddBookRequest {
  cover: string;
  title: string;
  description: string;
  pageCount: number;
  publicationDate: Date;
}

export interface UpdateBookRequest {
  cover: string;
  title: string;
  description: string;
  pageCount: number;
  publicationDate: Date;
}