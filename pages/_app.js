import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ChakraProvider>
        <AnimatePresence
          exitBeforeEnter
          // initial={false}
          // onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps}  />
        </AnimatePresence>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
