import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../Assets/Styles/global';
import defaultTheme from '../../Assets/Styles/Themes/default';

import { Router } from '../../Router';
import { Header } from '../Header';
import { ToastContainer } from '../Toast/ToastContainer';

import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer />

        <Container>
          <Header />
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
