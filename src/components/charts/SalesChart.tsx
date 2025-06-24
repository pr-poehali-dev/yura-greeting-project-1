import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Янв", sales: 1200000, target: 1000000 },
  { month: "Фев", sales: 1350000, target: 1200000 },
  { month: "Мар", sales: 1100000, target: 1300000 },
  { month: "Апр", sales: 1800000, target: 1400000 },
  { month: "Май", sales: 2100000, target: 1500000 },
  { month: "Июн", sales: 2400000, target: 1600000 },
];

const SalesChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} />
          <YAxis
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickFormatter={(value) => `₽${(value / 1000000).toFixed(1)}М`}
          />
          <Tooltip
            formatter={(value: number) => [
              `₽${(value / 1000000).toFixed(1)}М`,
              "",
            ]}
            labelStyle={{ color: "#374151" }}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#9b87f5"
            strokeWidth={3}
            dot={{ fill: "#9b87f5", strokeWidth: 2, r: 6 }}
            name="Продажи"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#7c3aed"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "#7c3aed", strokeWidth: 2, r: 4 }}
            name="План"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
