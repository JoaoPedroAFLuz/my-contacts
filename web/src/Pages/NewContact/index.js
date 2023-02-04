import contactsService from '../../Services/contactsService';

import { ContactForm } from '../../Components/ContactForm';
import { PageHeader } from '../../Components/PageHeader';

export function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await contactsService.createContact(contact);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
