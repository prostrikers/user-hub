import React from "react";
import MainLayout from "./layouts/MainLayout";
import { Button } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { ApplicationRouter } from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <MainLayout>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ApplicationRouter />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MainLayout>
  );
}

export default App;
