import * as React from "react";

import { useFetchBooksQuery } from "../../api/apiSlice";
import BooksTable from "../../components/Books/BooksTable";
import { TableHeader, RootView } from "./styles";
import Loading from "../../components/Loading";
import Error from "../../components/Error/index";
import { Common } from "../../components/Books/BooksTable";
import { useNavigate, useParams } from "react-router-dom";

export default function Home(): JSX.Element | null {
  const navigate = useNavigate();
  const param = useParams();

  const paginationModel = { page: Number(param?.page), pageSize: 20 };

  const { data, isError, isLoading } = useFetchBooksQuery({
    page: paginationModel.page,
    itemsPerPage: paginationModel.pageSize,
  });

  if (isLoading) {
    return <Loading text="Loading content...!" />;
  }

  if (isError) {
    // Just adding this dummy message here for now. It could  be further improved
    return <Error errorMessage={`Oops! Something went wrong!`} />;
  }

  const onUpdatePaginationModel = (model: Common): void => {
    navigate(`/home/${model.page}`);
  };

  return (
    <RootView>
      <TableHeader>Books inventory</TableHeader>
      <BooksTable
        books={data?.books}
        totalPages={data?.count}
        paginationModel={paginationModel}
        onUpdatePaginationModel={onUpdatePaginationModel}
      />
    </RootView>
  );
}
