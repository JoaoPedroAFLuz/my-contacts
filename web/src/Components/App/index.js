import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../Assets/Styles/global';
import defaultTheme from '../../Assets/Styles/Themes/default';

import { Header } from '../Header';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
