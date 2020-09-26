import React, { useContext } from "react";
import { RothContext } from "./rothContext";
import { lightTheme, darkTheme } from "../DarkModeComponents/Themes";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function RothGraph() {
  const { rothData } = useContext(RothContext);
  const localTheme = window.localStorage.getItem("theme");
  const toolTipBackground =
    localTheme === "light" ? lightTheme.body : darkTheme.body;
  const color = {
    totalBalance: "#82ca9d",
    totalContribution: "#5bb1cd",
    toolTipBackground: toolTipBackground,
  };

  return (
    <div className="roth-graph" width="100%" height="100%">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={rothData}
          margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="5" vertical={false} />
          <XAxis dataKey="age" name="age" />
          <YAxis tickFormatter={(tick) => "$" + tick.toLocaleString()}></YAxis>
          <Tooltip
            contentStyle={{ backgroundColor: color.toolTipBackground }}
            formatter={(value) =>
              "$" + new Intl.NumberFormat("en").format(value)
            }
          />
          <Legend
            verticalAlign="top"
            height={50}
            payload={[
              {
                id: "totalContribution",
                value: "Total Contribution",
                type: "square",
                color: color.totalContribution,
              },
              {
                id: "total",
                value: "Total Balance",
                type: "square",
                color: color.totalBalance,
              },
            ]}
          />
          <Area
            type="monotone"
            dataKey="totalContribution"
            name="Total Contribution"
            stackId="1"
            stroke="#0"
            fill={color.totalContribution}
          />
          <Area
            type="monotone"
            dataKey="total"
            name="Total"
            stackId="1"
            stroke="#0"
            fill={color.totalBalance}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RothGraph;
