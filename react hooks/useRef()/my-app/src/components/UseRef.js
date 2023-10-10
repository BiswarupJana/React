//it create a mutable variable which will not re-render the components.

//to access a DOM element directly

import React,{useState,useRef, useEffect} from "react";


const UseRef=()=>{
    const[myData, setMyData]=useState("");

    const count =useRef(0);
    const inputElem=useRef("");

    useEffect(()=>{
        count.current=count.current+1;
    });
    
    const changeStyle=()=>{
        inputElem.current.style.backgroundColor="blue";
        

        inputElem.current.focus();      // focus() is for focus it directly
    };

    return(
        <React.Fragment>
            <input 
            ref={inputElem}
            type="text"
            value={myData}
            onChange={(e)=>setMyData(e.target.value)}
            
             />
             <br />
             <button 
             type="submit"
             onClick={changeStyle}
             >Submit</button>
             <p>{count.current}</p>

        </React.Fragment>
    );
};




export default UseRef;