import React,{useState, useRef} from 'react';
import './App.css';
import ConfirmationModal from './component/confirmationModal';

function App() {

  const[open, setOpen]=useState(false);
  const modalRef= useRef();


  return (
    <>
    <button onClick={()=>setOpen(true)}>Open</button>
    <button onClick={()=>modalRef.current.focusCloseBtn()}>Focus Close</button>
    <button onClick={()=>modalRef.current.focusConfirmBtn()}>Focus Confirm</button>
    <button onClick={()=>modalRef.current.focusDenyBtn()}>Focus Deny</button>
    <ConfirmationModal
    ref={modalRef}
    isOpen={open}
    onClose={()=>setOpen(false)}
    />
    </>
  );
}

export default App;
