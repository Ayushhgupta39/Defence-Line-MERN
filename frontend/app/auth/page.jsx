"use client";

// Core Libraries
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// External Dependencies
import { ImSpinner8 } from "react-icons/im";

//  User-Built Modules
import useUserStore from "@app/Store/UserStore";
import axios from "@utils/clientAxiosConfig";

const page = () => {
  const router = useRouter();
  const params = useSearchParams();

  const setUserData = useUserStore((state) => state.setUserData);
  const setJwtToken = useUserStore((state) => state.setJwtToken);

  const [loading, setLoading] = useState(false);

  const [variant, setVariant] = useState("register");
  const [error, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    if (params.get("variant")) setVariant(params.get("variant"));
  }, [params]);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    const userData = {
      fullName: fullName.current.value,
      username: email.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await axios({
        url: "/api/auth/local/register",
        method: "POST",
        data: userData,
      });
      e.target.reset();
      setVariant("login");
    } catch (err) {
      setErrorMessage(err.response.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginCredentials = {
      identifier: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await axios({
        url: "/api/auth/local",
        data: loginCredentials,
        method: "POST",
      });
      setUserData(response.data.user);
      setJwtToken(response.data.jwt);
      router.push("/");
    } catch (err) {
      alert(JSON.stringify(err.response));
      setErrorMessage(err.response.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleVariant = () => {
    variant == "register" ? setVariant("login") : setVariant("register");
  };

  return (
    <div className="flex min-h-screen bg-white flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="flex justify-center text-3xl text-black font-anton font-semibold tracking-wider">
          Defence Line
        </h1>

        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {variant === "login"
            ? "Sign in to your account"
            : "Create your account"}
          {error && (
            <div className="text-xl text-red-400 animate-bounce">{error}</div>
          )}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          method="POST"
          onSubmit={variant == "register" ? handleSignup : handleLogin}
        >
          {variant === "register" && (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-2 sm:text-sm sm:leading-6"
                  ref={fullName}
                />
              </div>
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                ref={email}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                ref={password}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center gap-6 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <ImSpinner8
                className={`${!loading ? "hidden" : ""} animate-spin`}
                size={25}
              />

              {variant === "login" ? "Sign in" : "Register"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {variant === "login" ? "Not a member? " : "Already have an account? "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            onClick={toggleVariant}
          >
            {variant === "login" ? "Create a new account" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
