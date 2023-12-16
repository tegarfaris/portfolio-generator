import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import theme from "../theme";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidatePortfolio } from "../app/validation/portfolio.validation";
import { Provider } from "react-redux";
import store from "../app/redux/store";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  const methods = useForm({
    resolver: yupResolver(ValidatePortfolio),
  });
  return (
    <>
      <Head>
        <title>Portfolio Builder</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio Builder by Tegar" />
        <meta property="og:title" content="Portfolio Builder by Tegar" />
        <meta property="og:description" content="Portfolio Builder by Tegar" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Provider store={store}>
        <FormProvider {...methods}>
          <ChakraProvider theme={theme}>
            <main className={`${inter.className}`}>
              <Component {...pageProps} />
            </main>
          </ChakraProvider>
        </FormProvider>
      </Provider>
    </>
  );
}
