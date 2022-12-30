import React from "react";
import { Button } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { ApplicationRouter } from "./router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Router } from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
