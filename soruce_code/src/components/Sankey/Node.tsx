// Libraries
import React from "react";

// Library Types
import type { SankeyNode, sankey, SankeyGraph } from "d3-sankey";

// Props
type NodeProps<N, L> = {
  link: SankeyNode<{}, {}>;
  color: string;
  name: string;
  width?: number;
  height?: number;
  graph?: SankeyGraph<N, L>;
  sankey?: typeof sankey;
};

// Component
export default function Node<N, L>({
  link: { x0, x1, y0, y1 },
  color,
  name,
  width,
  height
}: NodeProps<N, L>) {
  const defaultWidth = x1 - x0;
  const defaultHeight = y1 - y0;

  const nodeWidth = width ? width : defaultWidth;
  const nodeHeight = height ? height : defaultHeight;

  const nodeX = width ? x0 : x0;
  const nodeY = height ? y0 + defaultHeight / 2 - height / 2 : y0;

  const textX = width ? x0 : x0;
  const textY = height ? nodeY + height / 2 + 6 : y0 + nodeHeight / 2 + 6;

  return (
    <g style={{ pointerEvents: "all" }} onClick={() => console.log()}>
      <rect
        x={nodeX}
        y={nodeY}
        width={nodeWidth}
        height={nodeHeight}
        fill={color}
      >
        <title>{name}</title>
      </rect>
      <text
        x={textX + 5}
        y={textY}
        width={nodeWidth}
        fill="black"
        style={{ userSelect: "none", overflowX: "hidden" }}
      >
        {name}
      </text>
    </g>
  );
}
