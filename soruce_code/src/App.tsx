// Libraries
import React from "react";
import * as d3 from "d3";
import chroma from "chroma-js";

// Custom Types
import type { ExtraNodeProperties } from "./types";

// Custom Components
import { Sankey, Link, Node } from "./components/Sankey";

// Data
import { data } from "./data";

// Component
export default function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: "sans-serif",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        Sankey
      </h1>
      <Sankey<ExtraNodeProperties, {}>
        data={data}
        nodeWidth={100}
        nodePadding={40}
      >
        {({ graph }) => {
          const color = chroma.scale("Set2").classes(graph.nodes.length);
          const colorScale = d3
            .scaleLinear()
            .domain([0, graph.nodes.length])
            .range([0, 1]);

          return (
            <g>
              {graph &&
                graph.links.map((link, i) => (
                  <Link
                    key={`sankey-link-${i}`}
                    link={link}
                    color={color(colorScale(link.source.index)).hex()}
                    maxWidth={30}
                  />
                ))}
              {graph &&
                graph.nodes.map((node, i) => (
                  <Node<ExtraNodeProperties, {}>
                    key={`sankey-node-${i}`}
                    link={node}
                    color={color(colorScale(i)).hex()}
                    name={node.name}
                    height={30}
                    graph={graph}
                  />
                ))}
            </g>
          );
        }}
      </Sankey>
    </div>
  );
}
