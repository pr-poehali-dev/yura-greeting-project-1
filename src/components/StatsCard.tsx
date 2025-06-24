import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: ReactNode;
  trend: "up" | "down";
}

const StatsCard = ({ title, value, change, icon, trend }: StatsCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <p
              className={`text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}
            >
              {change}
            </p>
          </div>
          <div className="text-blue-600">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
