import type {AppProps} from 'next/app';
import theme from '@themes/theme';
// import GlobalStyle from '@styles/globals';
import {GlobalStyle} from '../styled/base';

import {ThemeProvider} from 'styled-components';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
