import {
  Routes as ContainerRoutes,
  Route,
  MemoryRouter as Router,
} from 'react-router-dom';
import { Login } from './screens/Login';

export default function Routes() {
  return (
    <Router>
      <ContainerRoutes>
        {/* <Route path="/" element={<Caixa />} /> */}
        <Route path="/" element={<Login />} />
      </ContainerRoutes>
    </Router>
  );
}
