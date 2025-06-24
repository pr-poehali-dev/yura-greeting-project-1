import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { stage: "Лиды", count: 45, amount: 2250000 },
  { stage: "Квалификация", count: 32, amount: 4800000 },
  { stage: "Предложение", count: 18, amount: 5400000 },
  { stage: "Переговоры", count: 12, amount: 3600000 },
  { stage: "Закрыто", count: 8, amount: 2400000 },
];

const DealsChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="stage" tick={{ fontSize: 12 }} axisLine={false} />
          <YAxis tick={{ fontSize: 12 }} axisLine={false} />
          <Tooltip
            formatter={(value: number, name: string) => [
              name === "count"
                ? `${value} сделок`
                : `₽${(value / 1000000).toFixed(1)}М`,
              name === "count" ? "Количество" : "Сумма",
            ]}
            labelStyle={{ color: "#374151" }}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          />
          <Bar
            dataKey="count"
            fill="#9b87f5"
            radius={[4, 4, 0, 0]}
            name="count"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DealsChart;
