import React, { useState, useRef } from "react";
import CustomInput from "./Components/CustomInput";

function App() {
  const [value, setValue] = useState("red");
  const inputRef = useRef();
  return (
    <React.Fragment>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </React.Fragment>
  );

}

export default App;
