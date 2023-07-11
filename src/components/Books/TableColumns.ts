export const COLUMNS = [
  { field: "id", headerName: "ID", sortable: false },
  { field: "book_title", headerName: "Title", sortable: false, flex: 1 },
  { field: "book_author", headerName: "Author", sortable: false, flex: 1 },
  {
    field: "book_publication_country",
    headerName: "Publication Country",
    sortable: false,
    flex: 0.5,
  },
  {
    field: "book_publication_city",
    headerName: "Publication City",
    sortable: false,
    flex: 0.5,
  },
  { field: "book_pages", headerName: "Book Pages", sortable: false },
  {
    field: "book_publication_year",
    headerName: "Publication",
    sortable: false,
  },
];
