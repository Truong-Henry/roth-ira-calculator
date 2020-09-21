import React, { useContext } from "react";
import { RothContext } from "./rothContext";

import {
  ResponsiveContainer,
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
    <div className="row graph-container">
      <div className="col-sm">
        <div className="roth-graph" width="100%" height="100%">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={rothData}
              margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
            >
              <CartesianGrid strokeDasharray="5" vertical={false} />
              <XAxis dataKey="age" name="age">
                <Label value="Age" offset={-10} position="insideBottom" />
              </XAxis>
              <YAxis
                tickFormatter={(tick) => "$" + tick.toLocaleString()}
              ></YAxis>
              <Tooltip
                formatter={(value) =>
                  "$" + new Intl.NumberFormat("en").format(value)
                }
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
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  return renderGraph;
}

export default RothGraph;
