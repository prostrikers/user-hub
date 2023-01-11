import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "./routes";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { addAccessTokenInterceptor } from "./config/axios";
import { request } from "./utils/request";
import API from "./hooks/users/constraints";
import { useUserStore } from "./store/createUserSlice";

const queryClient = new QueryClient();

function App() {
  const { isLoading, error, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  const { setUser } = useUserStore();

  useEffect(() => {
    addAccessTokenInterceptor(getAccessTokenSilently);
  }, [getAccessTokenSilently]);

  useEffect(() => {
    const getCurrentUser = async (): Promise<any> => {
      return await request(
        {
          path: API.CURRENT_USER.path,
          method: API.CURRENT_USER.method,
        },
        null,
        true
      );
    };

    if (isAuthenticated) {
      getCurrentUser().then((user) => {
        setUser(user.data);
      });
    }
  }, [isAuthenticated]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <h1> loading ... </h1>;
  }

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
