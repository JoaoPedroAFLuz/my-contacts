import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useSafeAsyncAction } from '../../Hooks/useSafeAsyncAction';
import contactsService from '../../Services/contactsService';
import { toast } from '../../Utils/toast';

import { Presentation } from './Presentation';

export function Container() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  async function handleSubmit(contact) {
    try {
      const contactData = await contactsService.updateContact(id, contact);

      setContactName(contactData.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 5000,
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await contactsService.getContactById(id);

        safeAsyncAction(() => {
          setContactName(contact.name);

          contactFormRef.current.setFieldsValues(contact);

          setIsLoading(false);
        });
      } catch (error) {
        safeAsyncAction(() => {
          history.push('/');

          toast({
            type: 'danger',
            text: 'Contato não encontrado',
          });
        });
      }
    }

    loadContact();
  }, [id, history, safeAsyncAction]);

  return (
    <Presentation
      contactName={contactName}
      contactFormRef={contactFormRef}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
}
