import "../styles/globals.css";
import "../styles/projectCard.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <ChakraProvider>
        {/* <AnimatePresence exitBeforeEnter> */}
          <Component {...pageProps} />
        {/* </AnimatePresence> */}
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
