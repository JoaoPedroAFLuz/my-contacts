import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useDeferredValue,
} from 'react';

import ContactsService from '../../Services/contactsService';

import { toast } from '../../Utils/toast';

export function useHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [contactBeingDeleted, setContactBeingDeleted] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const defferedsearchTerm = useDeferredValue(searchTerm);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(
        (contact) =>
          contact.name
            .toLowerCase()
            .includes(defferedsearchTerm.toLowerCase()) ||
          contact.email
            ?.toLowerCase()
            .includes(defferedsearchTerm.toLowerCase())
      ),
    [contacts, defferedsearchTerm]
  );

  const getContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      console.error(error);
      setHasError(true);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  const handleToggleOrderBy = useCallback(() => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }, []);

  const handleChangeSearchTerm = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const handleTryAgain = useCallback(() => {
    getContacts();
  }, [getContacts]);

  const handleDeleteContact = useCallback((contact) => {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  }, []);

  async function handleConfirmDeleteContact() {
    try {
      setIsLoadingDelete(true);

      await ContactsService.deleteContact(contactBeingDeleted.id);

      setContacts((prevState) =>
        prevState.filter((contact) => contact.id !== contactBeingDeleted.id)
      );

      setIsDeleteModalVisible(false);

      toast({
        type: 'success',
        text: 'Contato deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o contato.',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return {
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
  };
}
