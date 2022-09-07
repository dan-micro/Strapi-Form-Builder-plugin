import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const minutes = 60 * 1000;

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * minutes,
      },
    },
  });

let reactQueryClient: QueryClient;
export const getReactQueryClient = (): QueryClient => {
  if (!reactQueryClient) {
    reactQueryClient = createQueryClient();
  }
  return reactQueryClient;
};

export const ReactQueryProviders = ({ children }: { children: any }) => (
  <QueryClientProvider client={createQueryClient()}>{children}</QueryClientProvider>
);
