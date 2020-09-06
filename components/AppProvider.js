import { ThemeProvider } from "styled-components";
import GlobalStyle from "./base/GlobalStyle";
import Head from "next/head";
import PropTypes from "prop-types";

function AppProvider({ children, theme }) {
  // Header data
  function Meta() {
    return (
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* TODO: Add fonts and favicon */}

        <title>Job Listings</title>
      </Head>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Meta />
        {children}
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
};

export default AppProvider;
