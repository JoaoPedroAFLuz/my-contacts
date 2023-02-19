import { useRef } from 'react';

import contactsService from '../../Services/contactsService';

import { toast } from '../../Utils/toast';

import { ContactForm } from '../../Components/ContactForm';
import { PageHeader } from '../../Components/PageHeader';

export function NewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await contactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 5000,
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm
        buttonLabel="Cadastrar"
        ref={contactFormRef}
        onSubmit={handleSubmit}
      />
    </>
  );
}
