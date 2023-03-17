import { Box } from "@mui/material";
import Footer from "components/footer";
import Header from "components/header";

function Panel({ children }: { children: React$Node }): React$Node {

  return (
    <>
      <Header />
      <Box component={'section'}>
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Panel;
