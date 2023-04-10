import React from 'react';
import { Outlet} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
// import Spinner from '../components/Spinner';

const RootLayout = () => {
  // const navigation = useNavigation();
  return (
    <>
    <MainNavigation />
    <main>
      {/* {navigation.state === 'loading' && <Spinner message={'Loading ...'}/>} */}
        <Outlet />
    </main>
    </>
  )
}

export default RootLayout
