import { PageHeader } from '../../Components/PageHeader';

import { ContactForm } from '../../Components/ContactForm';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
