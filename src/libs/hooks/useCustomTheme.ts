import { useMemo } from "react";
import { createTheme, ThemeOptions, Theme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

interface CustomThemeOptions extends ThemeOptions {
  mode?: "light" | "dark";
}

const useCustomTheme = (options: CustomThemeOptions): Theme => {
  // Detect user preference for dark mode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const mode = options.mode || (prefersDarkMode ? "dark" : "light");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: {
          main: "#000000",
          contrastText: "#ffffff", //button color
        },
        secondary: {
          main: "#dc004e",
          contrastText: "#ff1100",
        },
        text: {
          primary: "#000000", //text color
          secondary: "#ffffff",
          disabled: "#ffffff",
        },
      },
      typography: {
        fontFamily: "Roboto, sans-serif",
      },
      ...options,
    });
  }, [mode, options]);

  return theme;
};

export default useCustomTheme;
