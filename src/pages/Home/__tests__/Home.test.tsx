import React from "react";
import { render, screen } from "@testing-library/react";
import { useFetchBooksQuery } from "../../../api/apiSlice";
import { useNavigate, useParams } from "react-router-dom";
import Home from "../index";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("../../../api/apiSlice");

describe("<Home/>", () => {
  it("user should be able to see the loading state", () => {
    //@ts-ignore
    useFetchBooksQuery.mockImplementation(() => {
      return {
        data: {},
        isLoading: true,
        isError: false,
      };
    });
    render(<Home />);
    expect(screen.getByText("Loading content...!")).toBeInTheDocument();
  });

  it("user should be able to see the error message if something went wrong", () => {
    //@ts-ignore
    useFetchBooksQuery.mockImplementation(() => {
      return {
        data: {},
        isLoading: false,
        isError: true,
      };
    });
    render(<Home />);
    expect(screen.getByText("Oops! Something went wrong!")).toBeInTheDocument();
  });
  it("user should be able to see the list of books", () => {
    const navigate = jest.fn();
    //@ts-ignore
    useNavigate.mockImplementation(() => {
      return navigate;
    });
    //@ts-ignore
    useParams.mockImplementation(() => {
      return {
        page: 0,
      };
    });
    //@ts-ignore
    useFetchBooksQuery.mockImplementation(() => {
      return {
        data: {
          books: [
            {
              book_author: ["Ανώνυμος"],
              book_pages: 104,
              book_publication_city: "Βενετία",
              book_publication_country: "Ιταλία",
              book_publication_year: 1529,
              book_title: "Ο Αλέξανδρος ο Μακεδών",
              id: 2086,
            },
          ],
          count: 200,
        },
        isLoading: false,
        isError: false,
      };
    });
    render(<Home />);

    expect(screen.getByText("Books inventory")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Author")).toBeInTheDocument();
  });
});
