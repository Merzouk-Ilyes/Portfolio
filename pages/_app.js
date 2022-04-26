import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
