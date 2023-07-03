import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
type Props = {
  children: ReactNode;
};

const Root = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>
  );
};

export default Root;
