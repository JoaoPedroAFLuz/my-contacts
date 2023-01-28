import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  async function getContacts() {
    try {
      const response = await fetch(
        `http://192.168.15.55:3001/contacts?orderBy=${orderBy}`
      );
      const json = await response.json();
      setContacts(json);
    } catch (error) {
      console.error(error);
    }
  }

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  useEffect(() => {
    getContacts();
  }, [orderBy]);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </ListHeader>

      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>

                {contact.category_name && (
                  <small>{contact.category_name}</small>
                )}
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
        ))
      ) : (
        <span style={{ alignSelf: 'center' }}>Nenhum contato encontrado</span>
      )}
    </Container>
  );
}
