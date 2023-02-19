import { Route, Switch } from 'react-router-dom';

import { EditContact } from './Pages/EditContact';
import { Home } from './Pages/Home';
import { NewContact } from './Pages/NewContact';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
