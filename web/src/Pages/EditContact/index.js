import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import contactsService from '../../Services/contactsService';

import { ContactForm } from '../../Components/ContactForm';
import { Loader } from '../../Components/Loader';
import { PageHeader } from '../../Components/PageHeader/index';
import { toast } from '../../Utils/toast';
import { useSafeAsyncAction } from '../../Hooks/useSafeAsyncAction';

export function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const contactData = await contactsService.updateContact(id, contact);

      setContactName(contactData.name);

      toast({
        type: 'success',
        text: 'Contato editar com sucesso!',
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
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />
      <ContactForm
        buttonLabel="Salvar alterações"
        ref={contactFormRef}
        onSubmit={handleSubmit}
      />
    </>
  );
}
