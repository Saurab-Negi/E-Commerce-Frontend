import { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const Auth = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login function executed", formData);
    let resData;
    try {
      const response = await axios.post('http://localhost:3000/user/login', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      resData = response.data;

      if (resData.success) {
        localStorage.setItem('auth-token', resData.token);
        window.location.replace('/');
      } else {
        alert(resData.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const signUp = async () => {
    console.log("SignUp function executed", formData);
    let resData;
    try {
      const response = await axios.post('http://localhost:3000/user/signup', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      resData = response.data;

      if (resData.success) {
        localStorage.setItem('auth-token', resData.token);
        window.location.replace('/');
      } else {
        alert(resData.error);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Login") {
      login();
    } else {
      signUp();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center rounded-3xl shadow-custom px-6 mx-2 md:px-10 lg:px-14 lg:my-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-[#484848]">
            {state}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-8" method="POST" onSubmit={handleSubmit}>
            {state === "Sign Up" && (
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={changeHandler}
                    type="name"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-[1rem]">
              {state === "Sign Up" ? (
                <p className="auth-login text-[#5c5c5c] text-[0.8rem] text-[500]">Already have an account?
                  <span onClick={() => setState("Login")} className='text-[#4f46e5] text-[600] ml-2'>Login</span>
                </p>
              ) : (
                <p className="auth-login text-[#5c5c5c] text-[0.8rem] text-[500]">Create an account?
                  <span onClick={() => setState("Sign Up")} className='text-[#4f46e5] text-[600] ml-2'>Click here</span>
                </p>
              )}

              <div className="auth-agree flex items-center mt-2 mb-[1rem] gap-2 text-[#5c5c5c] text-[0.9rem] text-[500]">
                <input type="checkbox" name="" id="" required />
                <p className='text-[0.8rem]'>I agree to the terms of use & privacy policy.</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 my-[3rem] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
