import PropTypes from "prop-types";
import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  alpha,
} from "@mui/material/styles";
//
import palette from "./palette";
import { pxToRem, responsiveFontSizes } from "./typography";
import GlobalStyles from "./globalStyles";
import customShadows from "./customShadows";
import componentsOverride from "./overrides";
import { DefaultTheme } from "@mui/private-theming";

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }: { children: any }) {
  const FONT_PRIMARY = "Public Sans, sans-serif";

  //shadows
  const color = palette.grey[500];
  const transparent = alpha(color, 0.16);
  const transparent1 = alpha(color, 0.2);
  const transparent2 = alpha(color, 0.14);
  const transparent3 = alpha(color, 0.12);

  const theme = createTheme({
    palette,
    shape: { borderRadius: 6 },
    typography: {
      fontFamily: FONT_PRIMARY,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
      },
      h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
      },
      h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
      },
      h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
      },
      h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
      },
      h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
      },
      subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
      },
      subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
      },
      body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16),
      },
      body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
      },
      caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
      },
      overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase",
      },
      button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize",
      },
    },
    shadows: [
      "none",
      `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
      `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
      `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
      `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
      `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
      `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
      `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
      `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
      `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
      `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
      `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
      `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
      `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
      `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
      `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
      `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
      `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
      `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
      `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
      `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
      `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
      `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
      `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
      `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`,
    ],
    //@ts-ignore
    customShadows: customShadows(),
  });

  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      {/*@ts-ignore*/}
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
