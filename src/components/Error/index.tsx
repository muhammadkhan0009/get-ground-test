import { ErrorMessage } from "./styles";
import Box from "@mui/material/Box";

interface Props {
  errorMessage: string;
}

export default function Error({ errorMessage }: Props): JSX.Element {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Box>
  );
}
