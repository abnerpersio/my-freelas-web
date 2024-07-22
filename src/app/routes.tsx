import { useRoutes } from 'react-router-dom';
import { ROUTES } from '~/config/routes';
import { LoginPage } from '~/pages/login';

export function AppRouter() {
  const routes = useRoutes([
    {
      path: ROUTES.login,
      element: <LoginPage />,
    },
  ]);

  return routes;
}
