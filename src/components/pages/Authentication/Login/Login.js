import axios from "axios";
import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from '../../../../firebase.init';
import img from '../../../../img/inventory1.jpg';
import Loading from '../../../Shared/Loading/Loading'
import Social from "../Social/Social";
const Login = () => {
  const emailRef = useRef("");
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let errormessage;

  if (error) {
   errormessage = <p className="text-red-400 mt-2" >{error.message} </p>
  }
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    const url = "http://localhost:5000/login";
    const genToken = async()=>{
      const data = {email:user.user.email}
      const result =await axios.post(url,data);
      if (result.data.token){
        localStorage.setItem('accessToken', result.data.token)
        navigate(from, { replace: true });

      }


    }
    genToken();
    }
   
  

  const handleLogin = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = e.target.password.value;
    if (email && password) {
      signInWithEmailAndPassword(email, password);
    }
  };

  //password reset
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Password reset Email has been sent");
    } else {
      toast("Please enter an email.");
    }
  };
  return (
    <div className="container mt-5">
     <form onSubmit={handleLogin}>
     <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{ "backgroundImage": `url(${img})` }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            BroomingDale
          </h2>

          <p className="text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>
          <Social></Social>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              ref={emailRef}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <button
                onClick={()=>handleResetPassword()}
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </button>
            </div>

            <input
              name="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-8">
            <input type="submit" value="Login" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
              
          </div>
          {errormessage}

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/signup"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign up
            </Link>


            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          </div>
        </div>
      </div>
     </form>
   
    </div>
  );
};

export default Login;
