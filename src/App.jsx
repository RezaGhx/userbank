import {
  Box,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material";
import { useMemo } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from "routes";
import "./App.css";
import { getTheme } from "style/theme";

function App(): React$Node {
  const isLight = true;

  const projectTheme = useMemo(() => {
    let theme = createTheme(getTheme(isLight));
    theme = responsiveFontSizes(theme);
    return theme;
  }, [isLight]);

  const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				cacheTime:0,
			},
		},
	});

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={projectTheme}>
        <Box className={"viewBox"} component={"main"}>
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
