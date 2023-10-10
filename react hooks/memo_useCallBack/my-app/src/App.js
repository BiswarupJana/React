import { useState, useCallback } from "react";
import './App.css'
import Button from "./components/UI/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('app Running');

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
    setShowParagraph((prevShowParagra) => !prevShowParagra);
    }
  }, [allowToggle]);


  const allowToggleHandler=()=>{
    setAllowToggle(true);
  };

  return <div className='app'>
    <h1>Hi there!</h1>
    <DemoOutput show={showParagraph} />
    <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
  </div>
}


export default App;