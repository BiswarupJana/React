import React, { useRef, useEffect, useState } from "react";
import { select, axisRight, axisBottom, scaleLinear, scaleBand } from "d3";
import classes from "./BarChart.module.css";

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};
const BarChart = () => {
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(svgRef);
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    console.log(dimensions);

    // scales
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale).ticks(data.length);
    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (event, value) => {
        const index = svg.selectAll(".bar").nodes().indexOf(event.target);
        svg
          .selectAll(".tooltip")
          .data([value])
          .join((enter) => enter.append("text").attr("y", yScale(value) - 4))
          .text([value])
          .attr("class", "tooltip")
          .attr("x", xScale(index) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", (value) => 150 - yScale(value));
  }, [data, dimensions]);
  return (
    <div className={classes.total} ref={wrapperRef}>
      <div>
        <svg ref={svgRef} className={classes.svg}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>

      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => setData(data.map((value) => value + 5))}
        className={classes.button}
      >
        Update data
      </button>
      <button
        onClick={() => setData(data.filter((value) => value <= 35))}
        className={classes.button}
      >
        Filter Data
      </button>
      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
        className={classes.button}
      >
        Add data
      </button>
    </div>
  );
};

export default BarChart;
