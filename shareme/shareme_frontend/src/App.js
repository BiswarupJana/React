import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { gapi } from "gapi-script";

const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN;
const App = () => {
  
    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: ""
        })
      };
      gapi.load('client:auth2', start)
    },[]);


    // gapi.load("client:auth2", () => {
    //   gapi.client.init({
    //     client_id:
    //       '956540138964-9rruepdroolfvap1rr5vpbj3bigpf68l.apps.googleusercontent.com',
    //     plugin_name: "undefined",
    //     projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    //   });
    // });


    return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    )
  }

  export default App;
