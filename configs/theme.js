export default {
  styles: {
    global: (props) => ({
      "html, body": {
        color: "white",
        background: `linear-gradient(180deg, #111827 0%, #1A237E 100%)`,
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
    }),
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
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
    },
    cover: {
      100: "#dcdddf",
      200: "#9ea1a8"
    },
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
      }
    },
    Radio: {
      label: {
        fontSize: "1.125rem"
      }
    }
  },
}