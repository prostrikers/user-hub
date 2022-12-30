import { SignInPage } from "./pages/sign-in";
import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/home/Home";
import { BookNow } from "./pages/book-now";
import MainLayout from "./layouts/MainLayout";
import HomeLayout from "./layouts/HomeLayout";
import WithoutNavLayout from "./layouts/WithoutNav";
import { ProfilePage, EditProfilePage, ViewProfile } from "./pages/profile";
import ProfileLayout from "./layouts/profileLayout";

export const ApplicationRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <HomeLayout>
          <HomePage />
        </HomeLayout>
      ),
    },
    {
      path: "/sign-in",
      element: (
        <WithoutNavLayout>
          <SignInPage />
        </WithoutNavLayout>
      ),
    },
    {
      path: "/book-now/:type",
      element: (
        <MainLayout>
          <BookNow />
        </MainLayout>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProfileLayout>
          <ProfilePage />
        </ProfileLayout>
      ),
    },
    {
      path: "/dashboard/view",
      element: (
        <ProfileLayout>
          <ViewProfile />
        </ProfileLayout>
      ),
    },
    {
      path: "/dashboard/edit",
      element: (
        <ProfileLayout>
          <EditProfilePage />
        </ProfileLayout>
      ),
    },
  ]);

  return routes;
};
