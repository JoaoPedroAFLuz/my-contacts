import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import contactsService from '../../Services/contactsService';

import { ContactForm } from '../../Components/ContactForm';
import { Loader } from '../../Components/Loader';
import { PageHeader } from '../../Components/PageHeader/index';
import { toast } from '../../Utils/toast';

export function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  function handleSubmit() {
    //
  }

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await contactsService.getContactById(id);

        setContactName(contact.name);

        contactFormRef.current.setFieldsValues(contact);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado',
        });
      }
    }

    loadContact();
  }, [id, history]);

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
