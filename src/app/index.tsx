import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { QueryProvider } from '../providers/query';

export default function App() {
  return (
    <BrowserRouter>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </BrowserRouter>
  );
}
