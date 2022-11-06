import { useState } from "react";
import './App.css'
import Button from "./components/UI/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App(){
  const[showParagraph, setShowParagraph]=useState(false);

  const toggleParagraphHandler=()=>{
    setShowParagraph((prevShowParagra)=>!prevShowParagra);
  }

  return <div className='app'>
    <h1>Hi there!</h1>
    <DemoOutput  show={showParagraph}/>
    <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
  </div>
}


export default App;
