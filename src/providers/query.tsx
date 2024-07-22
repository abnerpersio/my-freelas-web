import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export function QueryProvider(props: Props) {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
}
