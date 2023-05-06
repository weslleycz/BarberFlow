import { Container } from 'components/Container';
import {
  Routes as ContainerRoutes,
  Route,
  MemoryRouter as Router,
} from 'react-router-dom';
import { Dashboard, Login } from './screens';

export default function Routes() {
  return (
    <Router>
      <ContainerRoutes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Container>
                <Dashboard />
              </Container>
            </>
          }
        />
      </ContainerRoutes>
    </Router>
  );
}
