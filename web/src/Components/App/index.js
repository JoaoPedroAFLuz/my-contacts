import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../Assets/Styles/global';
import defaultTheme from '../../Assets/Styles/Themes/default';

import { Routes } from '../../Routes';

import { Container } from './styles';
import { Header } from '../Header';
import { ToastContainer } from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
