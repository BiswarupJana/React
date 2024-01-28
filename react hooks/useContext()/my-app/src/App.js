import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <center>
          <FunctionContextComponent />
        </center>
      </ThemeProvider>
    </>
  );
}

export default App;
