/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';

import { useHome } from './useHome';

import { Button } from '../../Components/Button';
import { Loader } from '../../Components/Loader';
import { Modal } from '../../Components/Modal';

import {
  Card,
  Container,
  EmptyListContainer,
  ErrorContainer,
  Header,
  InputSearchContainer,
  ListHeader,
  SearchNotFoundContainer,
} from './style';

import arrow from '../../Assets/Images/Icons/arrow.svg';
import edit from '../../Assets/Images/Icons/edit.svg';
import emptyBox from '../../Assets/Images/Icons/empty-box.svg';
import magnifierQuestion from '../../Assets/Images/Icons/magnifier-question.svg';
import sad from '../../Assets/Images/Icons/sad.svg';
import trash from '../../Assets/Images/Icons/trash.svg';

export function Home() {
  const {
    contacts,
    filteredContacts,
    contactBeingDeleted,
    searchTerm,
    orderBy,
    hasError,
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    handleTryAgain,
    handleChangeSearchTerm,
    handleToggleOrderBy,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        visible={isDeleteModalVisible}
        isLoading={isLoadingDelete}
        title={`Deseja deletar o contato ”${contactBeingDeleted?.name}”`}
        confirmLabel="Deletar"
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type="text"
            placeholder="Pesquise pelo nome ou e-mail..."
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
        </InputSearchContainer>
      )}

      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : contacts.length > 0
            ? 'space-between'
            : 'center'
        }
      >
        {!hasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to="/new">Novo Contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="Sad icon" />

          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos!</strong>

            <Button type="button" onClick={handleTryAgain}>
              Tentar novamente
            </Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box" />

              <p>
                Você ainda não tem nenhum contato cadastrado!
                <br />
                Clique no botão <strong> ”Novo contato”</strong> à cima
                <br />
                para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier question" />
              <span>
                Nenhum resultado foi encontrado para
                <strong> ”{searchTerm}”</strong>
              </span>
            </SearchNotFoundContainer>
          )}

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

                  {contact.category.name && (
                    <small>{contact.category.name}</small>
                  )}
                </div>

                <span>{contact.email}</span>

                <span>{contact.phone}</span>
              </div>

              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
}
