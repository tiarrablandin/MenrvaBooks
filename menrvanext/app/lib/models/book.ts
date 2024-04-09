import { Author } from "./author";

export interface BookResponse{
  id: number;
  cover: string;
  title: string;
  description: string;
  pageCount: number;
  publicationDate: Date;
  dateAdded: Date;
  dateUpdated: Date;
  authors: Author[];
  series: Series;
}