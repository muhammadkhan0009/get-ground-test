import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Params {
  page: number;
  itemsPerPage: number;
}

interface BooksResponse {
  books: Array<{
    book_author: Array<string>;
    book_publication_city: string;
    book_publication_country: string;
    book_publication_year: number;
    book_pages: number;
    book_title: string;
    id: number;
  }>;
  count: number;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://nyx.vima.ekt.gr:3000/api/",
    headers: {
      "content-type": "application/json",
    },
  }),
  endpoints: (build) => ({
    fetchBooks: build.query<BooksResponse, Params>({
      query: ({ page, itemsPerPage }) => {
        return {
          url: `books`,
          method: "POST",
          body: JSON.stringify({
            page: page + 1,
            itemsPerPage: itemsPerPage,
          }),
        };
      },
    }),
  }),
});

export const { useFetchBooksQuery } = api;
