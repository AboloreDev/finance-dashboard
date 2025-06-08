import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import PredictionsPage from "./pages/predictions/Predictions";
import DashboardPage from "./pages/dashboard/Dashboard";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/predictions" element={<PredictionsPage />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default App;
