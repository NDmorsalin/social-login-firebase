import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";

function Login() {
    
    const { singInByFb, singInByTwitter, singInByGithub,singInByMS ,singInByEmail} = useAuth();
  const navigation = useNavigate();
  //   console.log(singInByFb);

  /* login with facebook start */
  const handleSignInByEmail = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user= await singInByEmail(email , password);
    console.log(user);
navigate('/')
  };
  /* login with facebook end */
  /* login with facebook start */
  const handleSigninWithFacebook = async () => {
    try {
      const info = await singInByFb();
      //   console.log(info);
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };
  /* login with facebook end */

  /* login with twitter start */
  const handleSigninWithTwitter = async () => {
    try {
      const info = await singInByTwitter();
      console.log(info);
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };
  /* login with twitter end */

  /* login with Github start */
  const handleSigninWithGithub = async () => {
    try {
      const info = await singInByGithub();
      console.log(info);
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };

  /* login with Github end */
  
  /* login with Microsoft start */
  const handleSigninWithMicrosoft = async () => {
    try {
      const info = await singInByMS();
      console.log(info);
      navigation("/");
    } catch (error) {
      console.log(error);
    }
  };
  /* login with Microsoft end */

  return (
    <div className="flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Log in to your account
          </h1>
          <form onSubmit={handleSignInByEmail} className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log in
              </button>
            </div>

            <div className="text-center text-sm mt-4">
              <span className="text-gray-600">Don't have an account yet? </span>
              <Link 
                to="/register"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create one now
              </Link>
            </div>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-100 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <button
                  type="button"
                  onClick={handleSigninWithFacebook}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-facebook-400 text-sm font-medium text-facebook-900 hover:bg-facebook-500"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 10-11.08 7.54V12.9h-2.1v-2.36H6.92V8.92a2.46 2.46 0 012.44-2.44h2.72V6.18A7.97 7.97 0 0018 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleSigninWithTwitter}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-twitter-700 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 3.67a8.23 8.23 0 01-2.34.64A4.08 4.08 0 0019.29 2a8.16 8.16 0 01-2.6 1A4.08 4.08 0 0012.92 0c-2.25 0-4.08 1.83-4.08 4.08 0 .32.04.63.09.93A11.62 11.62 0 012.2.75a4.1 4.1 0 001.27 5.47A4.02 4.02 0 012 9.27v.05c0 1.8 1.16 3.34 2.77 3.89a4.08 4.08 0 01-1.85.07 4.1 4.1 0 003.83 2.84A8.23 8.23 0 010 17.37 11.6 11.6 0 006.31 20c7.58 0 11.72-6.28 11.72-11.72 0-.18-.01-.37-.02-.55A8.34 8.34 0 0020 3.67z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleSigninWithGithub}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm  text-sm font-medium text-gray-700 hover:bg-github-500 bg-github-900 "
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.167 6.837 9.493.5.092.683-.217.683-.483 0-.237-.009-.866-.013-1.7-2.787.604-3.368-1.341-3.368-1.341-.455-1.165-1.11-1.476-1.11-1.476-.908-.622.07-.609.07-.609 1.002.07 1.527 1.03 1.527 1.03.89 1.523 2.337 1.084 2.902.83.092-.645.35-1.084.636-1.333-2.225-.249-4.567-1.112-4.567-4.947 0-1.092.39-1.987 1.029-2.682-.104-.248-.446-1.266.097-2.637 0 0 .84-.268 2.75 1.02a9.463 9.463 0 012.474-.335c.842 0 1.69.113 2.474.335 1.91-1.288 2.75-1.02 2.75-1.02.544 1.37.202 2.39.098 2.637.639.695 1.029 1.59 1.029 2.682 0 3.845-2.344 4.696-4.577 4.937.359.309.678.919.678 1.854 0 1.337-.012 2.416-.012 2.739 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="">
              <button
                  type="button"
                  onClick={handleSigninWithMicrosoft}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-twitter-700 shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Microsoft</span>
                 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

/* import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-900 "
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <input
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-gray-900 "
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-accent py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
               Submit
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <Link
                to="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 10-11.08 7.54V12.9h-2.1v-2.36H6.92V8.92a2.46 2.46 0 012.44-2.44h2.72V6.18A7.97 7.97 0 0018 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div>
              <Link
                to="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 3.67a8.23 8.23 0 01-2.34.64A4.08 4.08 0 0019.29 2a8.16 8.16 0 01-2.6 1A4.08 4.08 0 0012.92 0c-2.25 0-4.08 1.83-4.08 4.08 0 .32.04.63.09.93A11.62 11.62 0 012.2.75a4.1 4.1 0 001.27 5.47A4.02 4.02 0 012 9.27v.05c0 1.8 1.16 3.34 2.77 3.89a4.08 4.08 0 01-1.85.07 4.1 4.1 0 003.83 2.84A8.23 8.23 0 010 17.37 11.6 11.6 0 006.31 20c7.58 0 11.72-6.28 11.72-11.72 0-.18-.01-.37-.02-.55A8.34 8.34 0 0020 3.67z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <div>
              <Link
                to="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span className="sr-only">Sign in with GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.167 6.837 9.493.5.092.683-.217.683-.483 0-.237-.009-.866-.013-1.7-2.787.604-3.368-1.341-3.368-1.341-.455-1.165-1.11-1.476-1.11-1.476-.908-.622.07-.609.07-.609 1.002.07 1.527 1.03 1.527 1.03.89 1.523 2.337 1.084 2.902.83.092-.645.35-1.084.636-1.333-2.225-.249-4.567-1.112-4.567-4.947 0-1.092.39-1.987 1.029-2.682-.104-.248-.446-1.266.097-2.637 0 0 .84-.268 2.75 1.02a9.463 9.463 0 012.474-.335c.842 0 1.69.113 2.474.335 1.91-1.288 2.75-1.02 2.75-1.02.544 1.37.202 2.39.098 2.637.639.695 1.029 1.59 1.029 2.682 0 3.845-2.344 4.696-4.577 4.937.359.309.678.919.678 1.854 0 1.337-.012 2.416-.012 2.739 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
 */
