import { extendTheme } from "@chakra-ui/react";


const breakpoints = {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  };

const theme = extendTheme({
    breakpoints,
    fonts: {
      heading: `'Outfit', sans-serif`,
      body: `'Inter', sans-serif`,
    },
    styles: {
      global: () => ({
        body: {
          backgroundColor: "#F8F9FA",
          fontSize: {
            base: "12px",
            md: "14px",
          },
          color: "#26282B",
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          letterSpacing: "0.03em",
          px: "100px",
          py: 4,
          fontWeight: 500,
          transition:
            "background-color 400ms ease, border-color 400ms ease, transform 400ms ease",
        },
      },
      FormLabel: {
        baseStyle: {
          fontWeight: 600,
          fontSize: "14px",
        },
      },
    },
  });
  
  export default theme;