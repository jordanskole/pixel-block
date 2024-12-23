import { Grid } from "@chakra-ui/react";
import Pixel from "./components/ui/pixel";
import { ROWS } from "./constants/rows";

function App() {
  return (
    <Grid
      w="720px"
      h="720px"
      p={0}
      m={0}
      gap={1}
      templateColumns={"repeat(16, 1fr)"}
      templateRows={"repeat(16, 1fr)"}
    >
      {ROWS.map((row) => row.map(() => <Pixel />))}
    </Grid>
  );
}

export default App;
