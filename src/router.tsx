import { SignInPage } from "./pages/sign-in";
import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { BookNow } from "./pages/book-now";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage/>,
    },

    {
      path: "/sign-in",
      element: <SignInPage />,
    },
    {
      path: "/book-now",
      element: <BookNow />,
    },
  ]);

  return routes;
};
