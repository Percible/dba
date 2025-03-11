import React, { useEffect } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "JAN",
    chn: 30,
    usa: 90,
    uk: 40,
  },
  {
    name: "FEB",
    chn: 42,
    usa: 20,
    uk: 70,
  },
  {
    name: "MAR",
    chn: 18,
    usa: 45,
    uk: 30,
  },
  {
    name: "APR",
    chn: 55,
    usa: 60,
    uk: 22,
  },
  {
    name: "MAY",
    chn: 40,
    usa: 35,
    uk: 65,
  },
  {
    name: "JUN",
    chn: 70,
    usa: 38,
    uk: 28,
  },
  {
    name: "JUL",
    chn: 35,
    usa: 75,
    uk: 42,
  },
  {
    name: "AUG",
    chn: 25,
    usa: 68,
    uk: 48,
  },
];

const BarChart = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
          barSize={12}
          barGap={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            fontSize={12}
            tick={{ fill: "#718096" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            fontSize={12}
            tick={{ fill: "#718096" }}
          />
          <Bar
            dataKey="chn"
            fill="#A15BF9"
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
          />
          <Bar
            dataKey="usa"
            fill="#F25C8D"
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
          />
          <Bar
            dataKey="uk"
            fill="#4096FF"
            radius={[4, 4, 0, 0]}
            animationDuration={1500}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
