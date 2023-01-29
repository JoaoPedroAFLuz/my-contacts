import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { delay } from '../../Utils/delays';

import { Loader } from '../../Components/Loader';

import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListHeader,
} from './style';

import arrow from '../../Assets/Images/icons/arrow.svg';
import edit from '../../Assets/Images/icons/edit.svg';
import trash from '../../Assets/Images/icons/trash.svg';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(
    () =>
      contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, searchTerm]
  );

  useEffect(() => {
    getContacts();
  }, [orderBy]);

  async function getContacts() {
    try {
      setIsLoading(true);

      await delay(500);

      const response = await fetch(
        `http://192.168.15.55:3001/contacts?orderBy=${orderBy}`
      );

      const json = await response.json();

      setContacts(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome ou e-mail..."
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>

              {contact.category_name && <small>{contact.category_name}</small>}
            </div>

            <span>{contact.email}</span>

            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </Container>
  );
}
