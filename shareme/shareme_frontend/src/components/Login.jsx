import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import { client } from '../client';

const Login = () => {
  const navigate =useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    // const { googleId, imageUrl, name}=response.profileObj;
    const profileData =response?.profileObj;
    const doc ={
      _id: profileData?.googleId,
      _type: 'user',
      userName: profileData?.name,
      image: profileData?.imageUrl,
    }
    
    client.createIfNotExists(doc)
    .then(()=>{
      navigate('/',{replace: true})
    })
    console.log(response.profileObj);
  };
  const onFailure = (res)=>{
    console.log("login Failed!", res);
  }
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
          <img src={logo} width="130px" alt="logo" />
          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center m-3 p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" />Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
