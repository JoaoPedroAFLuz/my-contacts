import { PageHeader } from '../../Components/PageHeader/inex';

import { Input } from '../../Components/Input';
import { Select } from '../../Components/Select';
import { Button } from '../../Components/Button';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input placeholder="Nome" />
      <Select>
        <option>Instagram</option>
        <option>Trabalho</option>
        <option>Faculdade</option>
      </Select>
      <Button>Salvar alterações</Button>
    </>
  );
}
