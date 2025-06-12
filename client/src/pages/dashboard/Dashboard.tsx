import { Box, useMediaQuery, useTheme } from "@mui/material";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";

const gridTemplateDesktop = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`;

const gridTemplateMobile = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;

const DashboardPage = () => {
  const isLarge = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      display="grid"
      marginTop="1rem"
      gap="2rem"
      sx={
        isLarge
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateDesktop,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateMobile,
            }
      }
    >
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </Box>
  );
};

export default DashboardPage;
