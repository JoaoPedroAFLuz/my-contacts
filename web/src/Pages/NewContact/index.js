import { Input } from '../../Components/Input';
import { PageHeader } from '../../Components/PageHeader/inex';
import { Select } from '../../Components/Select';

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
    </>
  );
}
