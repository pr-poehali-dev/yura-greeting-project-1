import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatsCard from "@/components/StatsCard";
import SalesChart from "@/components/charts/SalesChart";
import DealsChart from "@/components/charts/DealsChart";
import {
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Download,
  Calendar,
} from "lucide-react";

const Reports = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Отчёты</h2>
            <p className="text-gray-600">Аналитика и статистика продаж</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Период
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Экспорт
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Общая выручка"
            value="₽8.4М"
            change="+24% за месяц"
            icon={<DollarSign className="h-8 w-8" />}
            trend="up"
          />
          <StatsCard
            title="Конверсия"
            value="32%"
            change="+5.2% за месяц"
            icon={<Target className="h-8 w-8" />}
            trend="up"
          />
          <StatsCard
            title="Новые клиенты"
            value="156"
            change="+18% за месяц"
            icon={<Users className="h-8 w-8" />}
            trend="up"
          />
          <StatsCard
            title="Средний чек"
            value="₽48.5К"
            change="+12% за месяц"
            icon={<TrendingUp className="h-8 w-8" />}
            trend="up"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Динамика продаж</CardTitle>
            </CardHeader>
            <CardContent>
              <SalesChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Воронка сделок</CardTitle>
            </CardHeader>
            <CardContent>
              <DealsChart />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Топ менеджеров</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Анна Петрова", sales: "₽1.2М", deals: 15 },
                  { name: "Михаил Иванов", sales: "₽980К", deals: 12 },
                  { name: "Елена Сидорова", sales: "₽750К", deals: 9 },
                ].map((manager, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <p className="font-medium">{manager.name}</p>
                      <p className="text-sm text-gray-600">
                        {manager.deals} сделок
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{manager.sales}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Топ клиенты</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "BigCorp", revenue: "₽2.1М", deals: 8 },
                  { name: "Альфа Групп", revenue: "₽1.8М", deals: 6 },
                  { name: 'ООО "Техком"', revenue: "₽1.2М", deals: 4 },
                ].map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-sm text-gray-600">
                        {client.deals} сделок
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{client.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Источники лидов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { source: "Сайт", leads: 45, percentage: 35 },
                  { source: "Реклама", leads: 32, percentage: 25 },
                  { source: "Рекомендации", leads: 28, percentage: 22 },
                  { source: "Выставки", leads: 23, percentage: 18 },
                ].map((source, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        {source.source}
                      </span>
                      <span className="text-sm text-gray-600">
                        {source.leads}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
