import { DataGrid } from "@mui/x-data-grid";
import { COLUMNS } from "./TableColumns";

export interface Common {
  page: number;
  pageSize: number;
}

interface Props {
  books?: Array<{
    book_author: Array<string>;
    book_publication_city: string;
    book_publication_country: string;
    book_publication_year: number;
    book_pages: number;
    book_title: string;
    id: number;
  }>;
  onUpdatePaginationModel: (model: Common) => void;
  totalPages?: number;
  paginationModel: Common;
}

export default function BooksTable({
  books,
  totalPages,
  paginationModel,
  onUpdatePaginationModel,
}: Props): JSX.Element {
  return (
    <DataGrid
      paginationMode="server"
      columns={COLUMNS}
      rows={books ? books : []}
      {...books}
      rowCount={totalPages}
      rowSelection={false}
      pageSizeOptions={[20]}
      onPaginationModelChange={onUpdatePaginationModel}
      disableColumnMenu={true}
      paginationModel={paginationModel}
    />
  );
}
