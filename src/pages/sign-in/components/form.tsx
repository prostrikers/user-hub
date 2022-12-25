import { Link } from "react-router-dom";
import { MainContainedButton } from "../../../components/gobal";
import { Formik } from "formik";
import { useSignInMutation } from "../../../hooks/auth/sign-in";

export function SignInForm() {
  const {
    isLoading,
    mutate: userSignIn,
    isSuccess,
    isError,
    reset,
  } = useSignInMutation();

  return (
    <>
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto "
            src="/logo.svg"
            alt="prostrikers"
          />
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {} as { email: string };

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const d = userSignIn({
              name: values.email,
              password: values.password,
            });

            console.log(d);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px ">
                <div className="py-3">
                  <p className="px-1 text-md text-black mb-3 font-semibold">
                    Email
                  </p>
                  <input
                    placeholder=""
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className="text-md block px-3 py-2  rounded-md w-full bg-white border-1 border-gray-300 placeholder-main-600 focus:placeholder-gray-500 focus:bg-white focus:border-main-600 focus:outline-none"
                  />

                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>

                <div className="py-3">
                  <p className="px-1 text-md text-black mb-3 font-semibold">
                    Password
                  </p>
                  <input
                    placeholder=""
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className="text-md block px-3 py-2  rounded-md w-full bg-white border-1 border-gray-300 placeholder-main-600 focus:placeholder-gray-500 focus:bg-white focus:border-main-600 focus:outline-none"
                  />

                  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
              </div>

              <div>
                <button
                  className="bg-main-400 text-white text-md font-semibold rounded-md hover:bg-main-300 mt-3  py-2.5  rounded-xl hover:bg-main-800 r-20 mt-3 flex w-2/3  justify-center"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Log In
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="ml-2 block text-sm text-gray-900">
                    Don’t have an account ?{" "}
                    <Link to="/sign-up" className="font-bold">
                      Sign up here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
