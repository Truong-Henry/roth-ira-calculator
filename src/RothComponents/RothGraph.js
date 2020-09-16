import React, { useContext } from "react";
import { RothContext } from "./rothContext";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";

function RothGraph() {
  const { rothData } = useContext(RothContext);

  const renderGraph = (
    <AreaChart
      className="roth-graph"
      width={600}
      height={500}
      data={rothData}
      margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
    >
      <CartesianGrid strokeDasharray="5" vertical={false} />
      <XAxis dataKey="age" name="age">
        <Label value="Age" offset={-10} position="insideBottom" />
      </XAxis>
      <YAxis tickFormatter={(tick) => "$" + tick.toLocaleString()}></YAxis>
      <Tooltip
        formatter={(value) => "$" + new Intl.NumberFormat("en").format(value)}
      />
      <Area
        type="monotone"
        dataKey="total"
        name="Total"
        stackId="1"
        stroke="#0"
        fill="#82ca9d"
      />
    </AreaChart>
  );

  return renderGraph;
}

export default RothGraph;
