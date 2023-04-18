import { ThemeProvider } from '@emotion/react';
import Routes from './Routes';
import { theme } from './theme';
import  "./App.scss";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
}
