import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { fetchUser } from './utils/fetchUser';
import { gapi } from "gapi-script";

const clientId = process.env.REACT_APP_GOOGLE_API_TOKEN;
const App = () => {
  const navigate = useNavigate();

  
    useEffect(() => {
      const user = fetchUser();
      if (!user) navigate("/login");

      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: "",
        });
      }
      gapi?.load("client:auth2", start);
    }, []);


    return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    )
  }

  export default App;




// import React, { useEffect } from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';

// import { Login } from './components';
// import Home from './container/Home';

// const App = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

//     if (!User) navigate('/login');
//   }, []);

//   return (
//     <Routes>
//       <Route path="login" element={<Login />} />
//       <Route path="/*" element={<Home />} />
//     </Routes>
//   );
// };

// export default App;