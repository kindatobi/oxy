"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { TrendUpIcon } from "@phosphor-icons/react";

export const description = "A linear line chart";

const chartData = [
  { month: "January", totalSpent: 56000 },
  { month: "February", totalSpent: 30500 },
  { month: "March", totalSpent: 23700 },
  { month: "April", totalSpent: 7300 },
  { month: "May", totalSpent: 209000 },
  { month: "June", totalSpent: 21400 },
];

const chartConfig = {
  desktop: {
    label: "totalSpent",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function AppLinechart() {
  return (
    <ChartContainer config={chartConfig} className="mt-6">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="totalSpent"
          type="linear"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
