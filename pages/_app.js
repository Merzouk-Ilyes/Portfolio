import "../styles/globals.css";
import "../styles/projectCard.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ChakraProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
