import React, { useState } from "react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { QueryFunction, DefaultOptions } from "@tanstack/react-query";
import { axios } from "@/utils/AxiosInstance";

const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const path = typeof queryKey === "string" ? queryKey : queryKey.join("/");
  return await axios.get(path);
};

export const buildQueryClient = (defaultOptions: DefaultOptions) => {
  const queryCache = new QueryCache();
  return new QueryClient({
    queryCache: queryCache,
    defaultOptions: {
      ...defaultOptions,
      queries: {
        staleTime: 5 * 60 * 1000,
        queryFn: defaultQueryFn,
        refetchOnMount: true,
        refetchOnReconnect: true,
        ...defaultOptions?.queries,
      },
    },
  });
};

interface ReactQueryProviderProps {
  children: React.ReactNode;
  queryClientOptions: DefaultOptions;
}

const ReactQueryProvider = ({
  children,
  queryClientOptions,
}: ReactQueryProviderProps) => {
  const [queryClient] = useState(buildQueryClient(queryClientOptions));
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
