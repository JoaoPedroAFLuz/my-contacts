import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../Assets/Styles/global';
import defaultTheme from '../../Assets/Styles/Themes/default';
import { ContactsList } from '../ContactsList';

import { Header } from '../Header';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
