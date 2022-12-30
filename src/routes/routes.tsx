import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";
import ProfileLayout from "../layouts/profileLayout";
import WithoutNavLayout from "../layouts/WithoutNav";
import { BookNow } from "../pages/book-now";
import { HomePage } from "../pages/home/Home";
import { EditProfilePage, ProfilePage, ViewProfile } from "../pages/profile";
import { SignInPage } from "../pages/sign-in";
import { SignUpPage } from "../pages/sign-up";
import { ApplicationRoutes } from "./constants";
import { ProtectedLayout } from "./protected";

export function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <HomeLayout>
          <HomePage />
        </HomeLayout>
      ),
    },
    {
      path: ApplicationRoutes.SIGN_IN,
      element: (
        <WithoutNavLayout>
          <SignInPage />
        </WithoutNavLayout>
      ),
    },
    {
      path: ApplicationRoutes.SIGN_UP,
      element: (
        <WithoutNavLayout>
          <SignUpPage />
        </WithoutNavLayout>
      ),
    },
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: ApplicationRoutes.BOOK_LANE,
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
          path: ApplicationRoutes.DASHBOARD_USER_PROFILE,
          element: (
            <ProfileLayout>
              <ViewProfile />
            </ProfileLayout>
          ),
        },
        {
          path: ApplicationRoutes.DASHBOARD_EDIT_PROFILE,
          element: (
            <ProfileLayout>
              <EditProfilePage />
            </ProfileLayout>
          ),
        },
      ],
    },
  ]);
  return element;
}
