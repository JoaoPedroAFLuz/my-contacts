import PropTypes from 'prop-types';

import { ContactForm } from '../../Components/ContactForm';
import { Loader } from '../../Components/Loader';
import { PageHeader } from '../../Components/PageHeader/index';

export function Presentation({
  contactName,
  contactFormRef,
  isLoading,
  onSubmit,
}) {
  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
      />

      <ContactForm
        buttonLabel="Salvar alterações"
        ref={contactFormRef}
        onSubmit={onSubmit}
      />
    </>
  );
}

Presentation.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactFormRef: PropTypes.shape.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
