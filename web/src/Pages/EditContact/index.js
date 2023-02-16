import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import contactsService from '../../Services/contactsService';

import { ContactForm } from '../../Components/ContactForm';
import { Loader } from '../../Components/Loader';
import { PageHeader } from '../../Components/PageHeader/index';
import { toast } from '../../Utils/toast';

export function EditContact() {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  function handleSubmit() {
    //
  }

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await contactsService.getContactById(id);
        console.log(contactData);

        setIsLoading(false);
      } catch (error) {
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
      <PageHeader title="Editar Contato" />
      <ContactForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
    </>
  );
}
