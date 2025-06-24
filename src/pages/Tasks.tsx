import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  Plus,
  Filter,
  Calendar,
  User,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Звонок клиенту "Альфа Групп"',
      description: "Обсудить детали предложения по консалтингу",
      assignee: "Менеджер",
      dueDate: "2024-02-10",
      priority: "high",
      status: "todo",
      relatedTo: "Сделка #2",
    },
    {
      id: 2,
      title: "Подготовка презентации",
      description: "Создать презентацию для демонстрации продукта",
      assignee: "Дизайнер",
      dueDate: "2024-02-12",
      priority: "medium",
      status: "in-progress",
      relatedTo: "Сделка #3",
    },
    {
      id: 3,
      title: "Отправка договора на подпись",
      description: "Подготовить и отправить договор клиенту BigCorp",
      assignee: "Юрист",
      dueDate: "2024-02-11",
      priority: "high",
      status: "todo",
      relatedTo: "Сделка #4",
    },
    {
      id: 4,
      title: "Встреча с техническим директором",
      description: "Обсуждение технических требований проекта",
      assignee: "Менеджер",
      dueDate: "2024-02-09",
      priority: "medium",
      status: "done",
      relatedTo: "Сделка #1",
    },
    {
      id: 5,
      title: "Анализ конкурентов",
      description: "Исследование предложений конкурентов для StartupIO",
      assignee: "Аналитик",
      dueDate: "2024-02-15",
      priority: "low",
      status: "todo",
      relatedTo: "Сделка #3",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "high":
        return "Высокий";
      case "medium":
        return "Средний";
      case "low":
        return "Низкий";
      default:
        return priority;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "todo":
        return "outline";
      case "in-progress":
        return "default";
      case "done":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Задачи</h2>
            <p className="text-gray-600">Управление рабочими задачами</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Создать задачу
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Поиск задач..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Фильтры
          </Button>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <Card key={task.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Checkbox checked={task.status === "done"} className="mt-1" />
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3
                          className={`font-semibold text-lg ${task.status === "done" ? "line-through text-gray-500" : "text-gray-900"}`}
                        >
                          {task.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {task.description}
                        </p>
                        <p className="text-xs text-purple-600 mt-1">
                          {task.relatedTo}
                        </p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Редактировать</DropdownMenuItem>
                          <DropdownMenuItem>Изменить статус</DropdownMenuItem>
                          <DropdownMenuItem>Удалить</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{task.assignee}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{task.dueDate}</span>
                        </div>
                        {task.status === "in-progress" && (
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>В работе</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <Badge variant={getPriorityColor(task.priority)}>
                          {getPriorityText(task.priority)}
                        </Badge>
                        <Badge variant={getStatusColor(task.status)}>
                          {task.status === "todo" && "К выполнению"}
                          {task.status === "in-progress" && "В работе"}
                          {task.status === "done" && "Выполнено"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
