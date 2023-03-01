import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Card, ListHeader } from './styles';

import arrow from '../../../../Assets/Images/Icons/arrow.svg';
import edit from '../../../../Assets/Images/Icons/edit.svg';
import trash from '../../../../Assets/Images/Icons/trash.svg';

function ContactsListComponent({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={onToggleOrderBy}>
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

              {contact.category.name && <small>{contact.category.name}</small>}
            </div>

            <span>{contact.email}</span>

            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button" onClick={() => onDeleteContact(contact)}>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}

ContactsListComponent.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
      email: PropTypes.string,
      phone: PropTypes.string,
    })
  ).isRequired,
  contactBeingDeleted: PropTypes.shape({
    name: PropTypes.string,
  }),
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

ContactsListComponent.defaultProps = {
  contactBeingDeleted: null,
};

export const ContactsList = memo(ContactsListComponent);
