import { LoadingTitle } from "./styles";
import Box from "@mui/material/Box";

interface Props {
  text: string;
}

export default function Loading({ text }: Props): JSX.Element {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <LoadingTitle>{text}</LoadingTitle>
    </Box>
  );
}
