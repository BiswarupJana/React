import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { useGoogleLogin } from 'react-google-login';

const Login = () => {
  const responseGoogle =(response)=>{
    console.log(response);
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video 
        src={shareVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-full object-cover"
        />

      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 buttom-0 bg-blackOverlay h-full">
          <img src={logo} width="130px" alt="logo"/>
          <div className="shadow-2xl">
            <GoogleLogin 
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps)=>(
                <button
                type="button"
                className="bg-mainColor flex justify-center items-center m-3 p-3 rounded-lg cursor-pointer outline-none"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4"/>Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Login
