import Layout from "@/components/Layout";
import StatsCard from "@/components/StatsCard";
import { Users, Handshake, TrendingUp, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const recentActivities = [
    {
      id: 1,
      type: "Новый контакт",
      description: "Иван Петров добавлен в систему",
      time: "5 мин назад",
      status: "new",
    },
    {
      id: 2,
      type: "Сделка закрыта",
      description: "Продажа ПО - 250 000 ₽",
      time: "15 мин назад",
      status: "success",
    },
    {
      id: 3,
      type: "Встреча запланирована",
      description: 'Демонстрация с ООО "Техком"',
      time: "1 час назад",
      status: "pending",
    },
    {
      id: 4,
      type: "Задача выполнена",
      description: "Подготовка коммерческого предложения",
      time: "2 часа назад",
      status: "done",
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      task: 'Звонок клиенту "Альфа Групп"',
      time: "14:00",
      priority: "high",
    },
    {
      id: 2,
      task: "Подготовка презентации",
      time: "16:30",
      priority: "medium",
    },
    {
      id: 3,
      task: "Отправка договора на подпись",
      time: "Завтра",
      priority: "low",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Дашборд</h2>
          <p className="text-gray-600">Добро пожаловать в CRM систему</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Всего контактов"
            value="1,234"
            change="+12% за месяц"
            icon={<Users className="h-8 w-8" />}
            trend="up"
          />
          <StatsCard
            title="Активные сделки"
            value="87"
            change="+5% за неделю"
            icon={<Handshake className="h-8 w-8" />}
            trend="up"
          />
          <StatsCard
            title="Конверсия"
            value="24%"
            change="+2.1% за месяц"
            icon={<TrendingUp className="h-8 w-8" />}
            trend="up"
          />
          <StatsCard
            title="Доход за месяц"
            value="₽2.4М"
            change="+18% за месяц"
            icon={<DollarSign className="h-8 w-8" />}
            trend="up"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Последние активности</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">
                        {activity.type}
                      </p>
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          activity.status === "success"
                            ? "default"
                            : "secondary"
                        }
                        className="mb-1"
                      >
                        {activity.status === "new" && "Новое"}
                        {activity.status === "success" && "Успешно"}
                        {activity.status === "pending" && "В ожидании"}
                        {activity.status === "done" && "Выполнено"}
                      </Badge>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Предстоящие задачи</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{task.task}</p>
                      <p className="text-sm text-gray-600">{task.time}</p>
                    </div>
                    <Badge
                      variant={
                        task.priority === "high"
                          ? "destructive"
                          : task.priority === "medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {task.priority === "high" && "Высокий"}
                      {task.priority === "medium" && "Средний"}
                      {task.priority === "low" && "Низкий"}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button className="w-full">Посмотреть все задачи</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
