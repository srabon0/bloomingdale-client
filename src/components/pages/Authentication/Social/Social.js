import React from "react";
import githubicon from '../../../../img/github.png';
import {useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import axios from "axios";
const Social = () => {
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errormessage;
    if (googleError || githubError ) {
       errormessage = <p className="text-red-400 mt-2" >{googleError?.message || githubError?.message}</p>
      }
      if (googleLoading || githubLoading) {
        return <Loading></Loading>
      }
      if (googleUser || githubUser) {
        const url = "https://glacial-dawn-34678.herokuapp.com/login";
        const genToken = async()=>{
          console.log(githubUser);
          const data = {email:  googleUser? googleUser?.user.email : githubUser?._tokenResponse.email }
          const result =await axios.post(url,data);
          if (result.data.token){
            localStorage.setItem('accessToken', result.data.token)
            navigate(from, { replace: true });

          }
    
    
        }
        genToken();
        
      }

  return (
    <div>
      <a
        href="#"
        className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <div className="px-4 py-2">
          <svg className="w-6 h-6" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
            <path
              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
              fill="#FF3D00"
            />
            <path
              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
              fill="#4CAF50"
            />
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#1976D2"
            />
          </svg>
        </div>

        <button onClick={() => signInWithGoogle()} className="w-5/6 px-4 py-3 font-bold text-center">
          Sign in with Google
        </button>
      </a>

      <a
        href="#"
        className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <div className="px-4 py-2">
        
            <img className="w-8 h-8" src={githubicon} alt="" />
        
        </div>

        <button onClick={() => signInWithGithub()} className="w-5/6 px-4 py-3 font-bold text-center">
          Sign in Github
        </button>
      </a>
      {errormessage}

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

        <a
          href="#"
          className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          or login with email
        </a>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
      </div>
     
    </div>
  );
};

export default Social;
