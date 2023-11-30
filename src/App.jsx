

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Administrativo from './pages/Administrativo';
import AdministrativoMsg from './pages/AdministrativoMsg';


function App() {

  return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/contato" component={ Contato } />
        <Route exact path="/adminstrativo" component={ Administrativo } />
        <Route exact path="/administrativo/msg" component={ AdministrativoMsg } />
      </Switch>
  )
}

export default App