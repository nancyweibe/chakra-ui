const theme = {
  styles: {
    global: (props) => ({
      "html, body": {
        color: "white",
        background: `dark.900`,
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
    }),
  },
  headingSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  colors: {
    primary: {
      50: '#e9eaff',
      100: '#bfc4f5',
      200: '#959de9',
      300: '#6c76df',
      400: '#434ed6',
      500: '#1A237E',
      600: '#202993',
      700: '#161d6a',
      800: '#0b1241',
      900: '#02051a',
    },
    brand: {
      50: '#dafcff',
      100: '#b3effa',
      200: '#89e4f2',
      300: '#5cd8ec',
      400: '#33cde6',
      500: '#17A2B8',
      600: '#078ca0',
      700: '#006572',
      800: '#003d47',
      900: '#00161c',
    },
    dark: {
      900: "#111827",
      800: "#979aa5",
      400: "#CBD4E1",
    },
    cover: {
      100: "#dcdddf",
      200: "#9ea1a8",
      300: "#F4F7FA",
      400: "#E5E5E5",
      500: "#919BC8",
    },
    col: {
      100: "#328ca3",
      200: "#B20ECA",
    },
    secondary: {
      50: '#ffe4ff',
      100: '#f5b5fd',
      200: '#ea87f9',
      300: '#e157f4',
      400: '#d728f0',
      500: '#B20ECA',
      600: '#9309a8',
      700: '#6a0478',
      800: '#41014a',
      900: '#19001d',
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: "25px",
        cursor: "pointer",
      },
      sizes: {
        md: {
          h: "48px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        "radialPrimary": {
          padding: 0,
          height: "30px",
          width: "30px",
          minWidth: "30px",
          fontSize: "0.8125rem",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          borderWidth: "1px",
          borderRadius: "50%",
          borderStyle: "solid",
          borderColor: "brand.500",

          _hover: {
            bg: "white",
            borderColor: "white",
          }
        },
        "outline-grey": {
          bg: "rgba(255, 255, 255, 0.1)",
          color: "white",
          border: "2px solid rgba(255, 255, 255, 0.5)",

          _hover: {
            bg: "rgba(255, 255, 255, 0.4)",
          }
        },
        "primary-effect": {
          overflow: "hidden",
          background: `linear-gradient(123.82deg, #17A2B8 0%, #B20ECA 50%, #17A2B8 100%)`,
          transition: "all 300ms ease",
          backgroundSize: "200% auto",

          span: {
            position: "relative",
            zIndex: 1,
          },

          _hover: {
            backgroundPosition: "100% center",
          }
        },
        "secondary": {
          bg: "col.200",
          color: "white",

          _hover: {
            bg: "brand.500",
          }
        },
      },
    },
    Heading: {
      baseStyle: {
        strong: {
          fontWeight: 900,
          backgroundImage: `linear-gradient(to right, #27C4CE 0%, #B20ECA 50%, #27C4CE 100%)`,
          WebkitBackgroundClip: "text",
          backgroundSize: "500% auto",
          color: "transparent",
          animation: "shine 10s linear infinite",
          animationDelay: "0s"
        },
        span: {
          fontWeight: 900,
          color: "secondary.500"
        }
      },
      sizes: {
        "3xl": {
          fontSize: "4rem",
        },
      },
    },
    Input: {
      variants: {
        light: {
          field: {
            border: "1px solid",
            borderColor: "rgba(255,255,255, 0.4)",
            background: "rgba(255,255,255, 0.2)",
            color: "white",
            height: "48px",
            borderRadius: "25px",
            paddingLeft: "20px",

            _placeholder: {
              color: "rgba(255,255,255, 0.8)"
            },
            _focus: {
              boxShadow: "none"
            }
          },
        },
        transparent: {
          field: {
            border: "1px solid",
            borderColor: "transparent",
            background: "transparent",
            color: "white",
            height: "48px",
            borderRadius: "25px",
            paddingLeft: "20px",

            _placeholder: {
              color: "rgba(255,255,255, 0.8)"
            },
            _focus: {
              boxShadow: "none"
            }
          },
        }
      }
    },
    Radio: {
      label: {
        fontSize: "1.125rem"
      }
    }
  },
}

export default theme
