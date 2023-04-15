import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSafeAsyncAction } from '../../Hooks/useSafeAsyncAction';
import contactsService from '../../Services/contactsService';
import { toast } from '../../Utils/toast';

export function useEditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const contactFormRef = useRef(null);

  const { id } = useParams();
  // const history = useHistory();
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
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contact = await contactsService.getContactById(
          id,
          controller.signal
        );

        safeAsyncAction(() => {
          setContactName(contact.name);

          contactFormRef.current.setFieldsValues(contact);

          setIsLoading(false);
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        safeAsyncAction(() => {
          // history.push('/');

          toast({
            type: 'danger',
            text: 'Contato não encontrado',
          });
        });
      }
    }

    loadContact();

    return () => {
      controller.abort();
    };
  }, [id, safeAsyncAction]);

  return { contactName, contactFormRef, isLoading, handleSubmit };
}
