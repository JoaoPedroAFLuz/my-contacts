import { Route, Routes } from 'react-router-dom';

import { EditContact } from './Pages/EditContact';
import { Home } from './Pages/Home';
import { NewContact } from './Pages/NewContact';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}
