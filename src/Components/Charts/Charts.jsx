import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {} from "./chart-styles";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 1,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 3,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 1,
  },
  {
    name: "Jun",
    uv: 2780,
    pv: 3908,
    amt: 1,
  },
  {
    name: "July",
    uv: 1890,
    pv: 4800,
    amt: 2,
  },
  {
    name: "Aug",
    uv: 2390,
    pv: 3800,
    amt: 2,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4300,
    amt: 3,
  },
  {
    name: "Oct",
    uv: 3490,
    pv: 4300,
    amt: 3,
  },
  {
    name: "Nov",
    uv: 3490,
    pv: 4300,
    amt: 4,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 4,
  },
];

function Charts() {
  return (
    <div>
      <LineChart
        width={1000}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
     
        <XAxis dataKey="name" />
        <YAxis unit={"$"} type="number" />
        <Tooltip  />
        <Line type="monotone" strokeWidth={5} dataKey="amt" stroke="#017189" />
      </LineChart>
    </div>
  );
}

export default Charts;
