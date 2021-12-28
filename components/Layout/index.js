import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: process.env.NODE_ENV === "production",
      refetchOnWindowFocus: process.env.NODE_ENV === "production",
    },
  },
});

export default function Layout({ children }) {
  return (
    <div>
      <Head></Head>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
}
