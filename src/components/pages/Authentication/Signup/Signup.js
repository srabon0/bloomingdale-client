import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from '../../../../firebase.init';
import img from '../../../../img/inventory2.jpg';
import Loading from '../../../Shared/Loading/Loading';
import Social from '../../Authentication/Social/Social';
const Registration = () => {

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  var errormsg;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
 
  if (error) {
    errormsg = <p className="text-red-500">Error: {error.message}</p> 
    
  }
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmpassword.value;
    console.log(email, password);
    if(password!==confirmPassword){
     toast("Password not matched")
     e.target.reset()
      return


    }
    if (email && password) {
      createUserWithEmailAndPassword(email, password);
      
    }
  };
  return (
    <div className="container my-5">
      <form onSubmit={handleRegistration}>
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
              Welcome!
            </p>

            <Social></Social>

            
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Name
              </label>
              <input
              required
                name="name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
            </div>

            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
              required
                name="email"
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
                
              </div>

              <input
              required
                name="password"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Confirm Password
                </label>
                
              </div>

              <input
              required
                name="confirmpassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
            </div>

            

            <div className="mt-8">
              <input
                type="submit"
                value="Sign Up"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
            </div>
         

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <p className="text-xs text-gray-500 uppercase">Already Registered?<Link
                to="/login"
                className="text-xs text-gray-500 uppercase dark:text-blue-400 hover:underline"
              >
              Login
              </Link></p>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
