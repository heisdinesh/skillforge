import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
// import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import * as AuthActions from "@/app/store/auth/actions";
import { useRouter } from "next/router";

import "@/app/globals.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const signIn = (data) => dispatch(AuthActions.signIn(data));
  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     username: Yup.string().required("Required"),
  //     password: Yup.string().required("Required"),
  //   }),
  //   onSubmit: (values) => {
  //     // Handle login logic here
  //     console.log("Login form submitted with values:", values);
  //     signIn({
  //       username: values.username,
  //       password: values.password,
  //     });
  //   },
  // });

  useEffect(() => {
    if (auth?.signInSuccess === true) {
      toast("Sign In success");
      router.push("/dashboard");
      console.log(">>>>>>>>>>>>>>>>>");
    }
  }, [auth?.signInSuccess]);
  // const { handleSubmit } = formik;
  return (
    <div className="min-h-screen flex items-center text-gray-950 justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
            signIn({
              username: values.email,
              password: values.password,
            });
          }}
        >
          {({ errors, touched }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="text-gray-950">
                    User Name
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={
                      "appearance-none rounded-none relative block w-full px-3 py-2 border " +
                      (errors.email && touched.email
                        ? "border-red-500 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500")
                    }
                    placeholder="Username"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={
                      "appearance-none rounded-none relative block w-full px-3 py-2 border " +
                      (errors.password && touched.password
                        ? "border-red-500 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500"
                        : "border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500")
                    }
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
