import React ,{useRef, useEffect, useState} from 'react';
import './App.css';
import {
  select,
  line,
  curveCardinal,
  axisRight,
  axisBottom,
  scaleLinear,
} from "d3";

function App() {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  useEffect(() => {
    // console.log(svgRef);
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    svg
      .selectAll(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .selectAll(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);

    // generates the "d" attribute of a path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    /////circle //
    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join("circle")
    //   .attr("r", (value) => value)
    //   .attr("cx", (value) => value * 2)
    //   .attr("cy", (value) => value * 2)
    //   .attr("stroke", "red");

    ////line////
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);

  return (
    <React.Fragment>
      <div>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value <= 35))}>
        Filter Data
      </button>
    </React.Fragment>
  );
}
export default App;
