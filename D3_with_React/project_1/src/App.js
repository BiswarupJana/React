import React ,{useRef, useEffect, useState} from 'react';
import './App.css';
import {select} from "d3";


function App() {
  const [data, setData] = useState([25, 30 ,45, 60 , 20])
  const svgRef=useRef();
  useEffect(() => {
    // console.log(svgRef);  
    const svg= select(svgRef.current);  
    svg
    .selectAll("circle")
    .data(data)
    .join(
      enter => enter.append("circle").attr("class", "new").style('background', 'red'),
      update => update.attr("class", "update").style('background', 'blue'),
      exit => exit.remove()
    );
  }, [data])
  
  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={()=>setData(data.map(value=> value + 5))}>
        Update data
      </button>
    </React.Fragment>
  )
}
export default App;
