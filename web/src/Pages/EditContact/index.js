import { ContactForm } from '../../Components/ContactForm';
import { PageHeader } from '../../Components/PageHeader/index';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar Contato" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
