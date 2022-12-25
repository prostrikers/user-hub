import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      borderRadius: string;
      boxShadow: string;
      header: {
        height: {
          xs: number;
          md: number;
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      borderRadius?: string;
      boxShadow?: string;
      header?: {
        height: {
          xs: number;
          md: number;
        };
      };
    };
  }

  interface PaletteColorOptions {
    main: string;
    dark?: string;
    light?: string;
    A100?: string;
    A200?: string;
    A400?: string;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }

  interface PaletteColor {
    A100?: string;
    A200?: string;
    A400?: string;
  }

  interface Palette {
    tertiary?: PaletteColorOptions;
  }
}

export interface IColor {
  main: string;
  A100: string;
  A200: string;
  A400: string;
  dark: string;
  light: string;
}

const themeFactory = ({
  primary,
  secondary,
}: {
  primary: IColor;
  secondary: IColor;
}) => {
  const colors = {
    formLabel: "#333333",
    primary,
    secondary,
    tertiary: {
      main: "#808183",
      A100: "#999999",
      A200: "#CDCDCD",
    },
  };

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1224,
    xl: 1536,
  };

  let theme = createTheme({
    spacing: 4,
    breakpoints: {
      values: breakpoints,
    },
    palette: {
      mode: "light",
      primary: colors.primary,
      secondary: colors.secondary,
      tertiary: colors.tertiary,
      text: {
        primary: "#1C2520",
        secondary: "#BBBAC2",
      },
      background: {
        default: "#FAFAFC",
        paper: "#FFFFFF",
      },
      success: {
        main: "#3ecc96",
      },
      error: {
        main: "#FF3941",
        dark: "#FE4951",
      },
      info: {
        main: "#22B8E8",
      },
      warning: {
        main: "#FFB301",
      },
      divider: "#E7E7F1",
    },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      h1: {
        fontSize: "54px",
        lineHeight: "64px",
        fontWeight: "bold",
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h2: {
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: "bold",
        fontFamily: ` "Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h3: {
        fontSize: "30px",
        lineHeight: "37px",
        fontWeight: "bold",
        fontFamily: ` "Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h4: {
        fontSize: "24px",
        lineHeight: "29px",
        fontWeight: "bold",
        fontFamily: ` "Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h5: {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: "bold",
        fontFamily: ` "Roboto", "Helvetica", "Arial", sans-serif`,
      },
      h6: {
        fontSize: "18px",
        lineHeight: "24px",
        fontWeight: "bold",
        fontFamily: ` "Roboto", "Helvetica", "Arial", sans-serif`,
      },
      subtitle1: {
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "bold",
      },
      subtitle2: {
        fontSize: "14px",
        lineHeight: "17px",
        fontWeight: "medium",
      },
      body1: {
        fontSize: "16px",
        lineHeight: "24px",
      },
      body2: {
        fontSize: "14px",
        lineHeight: "17px",
      },
      button: {
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: "600",
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg",
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: "transparent",
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 48,
            height: 26,
            padding: 0,
            margin: 8,
          },
          switchBase: {
            padding: 1,
            "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
              transform: "translateX(16px)",
              color: "#fff",
              "& + $track": {
                opacity: 1,
                border: "none",
              },
            },
          },
          thumb: {
            width: 24,
            height: 24,
          },
          track: {
            borderRadius: 13,
            border: "1px solid #bdbdbd",
            backgroundColor: "#fafafa",
            opacity: 1,
            transition:
              "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            padding: "12px 36px",
            fontSize: "16px",
            borderRadius: "6px",
            [`@media (max-width: ${breakpoints.sm}px)`]: {
              padding: "13px 25px",
            },
          },
          contained: {
            color: "#fff",
          },
          sizeSmall: {
            padding: "13px 36px",
            height: "45px",
          },
          sizeMedium: {
            padding: "14px 36px",
            height: "48px",
          },
          sizeLarge: {
            padding: "18px 36px",
            height: "56px",
          },
          outlined: {
            background: "#fff",
            color: "#000",
            border: `1px solid ${colors.primary.A100}`,
            "&:hover": {
              color: colors.primary.main,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "6px",
          },
        },
        defaultProps: {
          elevation: 0,
        },
      },
      MuiGrid: {
        defaultProps: {
          columnSpacing: "24px",
        },
      },
      MuiTextField: {},
      MuiSelect: {},
      MuiPagination: {},
      MuiOutlinedInput: {},
      MuiCheckbox: {},
      MuiFormLabel: {},
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            margin: 0,
            padding: 0,
            transition: "Mui-expanded 1.5s ease",
            backgroundColor: "#050314",
            "&:(:last-child)": {
              borderBottom: 0,
            },
            "&:not(:last-child)": {
              borderBottom: `1px solid rgba(187, 186, 194, 0.3)`,
            },
            "&:before": {
              display: "none",
            },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginLeft: 0,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#333333",
          },
        },
        defaultProps: {
          // @ts-ignore
          component: "div",
        },
      },
      MuiDialog: {
        styleOverrides: {
          root: { background: "#E7E7F199 0% 0% no-repeat padding-box;" },
        },
      },
    },
    custom: {
      borderRadius: "6px",
      boxShadow: "-8px 16px 32px #0000000A",
      header: {
        height: {
          xs: 60,
          md: 80,
        },
      },
    },
  });

  // theme.typography.h1 = {
  //   ...theme.typography.h1,
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "31px",
  //     lineHeight: "39px",
  //   },
  // };

  // theme.typography.h2 = {
  //   ...theme.typography.h2,
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "25px",
  //     lineHeight: "31px",
  //   },
  // };

  // theme.typography.h3 = {
  //   ...theme.typography.h3,
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "20px",
  //     lineHeight: "30px",
  //   },
  // };

  theme.typography.h6 = {
    ...theme.typography.h6,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "18px",
    },
  };

  // theme.typography.subtitle1 = {
  //   ...theme.typography.subtitle1,
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "16px",
  //     lineHeight: "24px",
  //   },
  // };

  // theme.typography.subtitle2 = {
  //   ...theme.typography.subtitle2,
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "14px",
  //     lineHeight: "21px",
  //   },
  // };

  theme.typography.body1 = {
    ...theme.typography.body1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  };

  // theme.typography.body2 = {
  //   ...theme.typography.body2,
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "16px",
  //     lineHeight: "24px",
  //   },
  // };

  // theme.typography.button = {
  //   ...theme.typography.button,
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: "16px",
  //     lineHeight: "24px",
  //   },
  // };

  if (theme?.components?.MuiAppBar) {
    theme.components.MuiAppBar = {
      ...theme.components?.MuiAppBar,
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
        },
      },
    };
  }

  if (theme?.components?.MuiContainer) {
    theme.components.MuiContainer = {
      ...theme.components?.MuiContainer,
      styleOverrides: {
        root: {
          [theme.breakpoints.down("md")]: {
            paddingLeft: theme.spacing(4.25),
            paddingRight: theme.spacing(4.25),
          },
        },
      },
    };
  }

  if (theme?.components?.MuiOutlinedInput) {
    theme.components.MuiOutlinedInput = {
      ...theme.components?.MuiOutlinedInput,
      styleOverrides: {
        root: {
          height: "48px",
          backgroundColor: theme.palette.primary.A400,
          color: theme.palette.tertiary?.A100,
          borderRadius: "6px",
          ".MuiOutlinedInput-input": {
            // height: "15px",
            "&::placeholder": {
              color: colors.tertiary.A100,
              opacity: 1,
            },
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.A100,
            borderRadius: "6px",
          },
          ".MuiInputBase-inputSizeSmall": {
            height: "27px !important",
            "&::placeholder": {
              fontSize: "14px",
            },
          },
          ".Mui-focused": {
            borderWidth: "1px",
          },
          input: {
            "&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active":
              {
                WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset !important`,
              },
          },
        },
      },
    };
  }

  if (theme?.components?.MuiPagination) {
    theme.components.MuiPagination = {
      ...theme.components?.MuiPagination,
      styleOverrides: {
        root: {
          ".MuiPaginationItem-previousNext": {
            backgroundColor: theme.palette.background.paper,
          },
        },
      },
    };
  }

  if (theme?.components?.MuiFormLabel) {
    theme.components.MuiFormLabel = {
      ...theme.components?.MuiFormLabel,
      styleOverrides: {
        root: {
          color: colors.formLabel,
          fontWeight: "medium",
        },
      },
    };
  }

  return theme;
};

export default themeFactory;
