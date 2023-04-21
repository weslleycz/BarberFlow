import { ThemeProvider } from '@emotion/react';
import { CookiesProvider } from 'react-cookie';
import './App.scss';
import Routes from './Routes';
import { theme } from './theme';

export default function App() {
  return (
    <>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </CookiesProvider>
    </>
  );
}
