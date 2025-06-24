import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Plus,
  Filter,
  DollarSign,
  Calendar,
  User,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "Продажа ПО для автоматизации",
      client: 'ООО "Техком"',
      contact: "Иван Петров",
      amount: "₽250,000",
      stage: "negotiation",
      probability: 75,
      closeDate: "2024-02-15",
      daysLeft: 5,
    },
    {
      id: 2,
      title: "Консалтинговые услуги",
      client: "Альфа Групп",
      contact: "Мария Сидорова",
      amount: "₽180,000",
      stage: "proposal",
      probability: 60,
      closeDate: "2024-02-20",
      daysLeft: 10,
    },
    {
      id: 3,
      title: "Разработка мобильного приложения",
      client: "StartupIO",
      contact: "Александр Козлов",
      amount: "₽450,000",
      stage: "qualified",
      probability: 40,
      closeDate: "2024-03-01",
      daysLeft: 19,
    },
    {
      id: 4,
      title: "Внедрение CRM системы",
      client: "BigCorp",
      contact: "Елена Васильева",
      amount: "₽320,000",
      stage: "closed-won",
      probability: 100,
      closeDate: "2024-01-30",
      daysLeft: 0,
    },
    {
      id: 5,
      title: "Техническая поддержка",
      client: "TechSolutions",
      contact: "Дмитрий Новиков",
      amount: "₽95,000",
      stage: "lead",
      probability: 20,
      closeDate: "2024-02-25",
      daysLeft: 15,
    },
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "lead":
        return "outline";
      case "qualified":
        return "secondary";
      case "proposal":
        return "default";
      case "negotiation":
        return "default";
      case "closed-won":
        return "default";
      case "closed-lost":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStageText = (stage: string) => {
    switch (stage) {
      case "lead":
        return "Лид";
      case "qualified":
        return "Квалифицирован";
      case "proposal":
        return "Предложение";
      case "negotiation":
        return "Переговоры";
      case "closed-won":
        return "Закрыта";
      case "closed-lost":
        return "Потеряна";
      default:
        return stage;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Сделки</h2>
            <p className="text-gray-600">Управление воронкой продаж</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Создать сделку
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Поиск сделок..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Фильтры
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-1">{deal.title}</CardTitle>
                    <p className="text-sm text-gray-600">{deal.client}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Редактировать</DropdownMenuItem>
                      <DropdownMenuItem>
                        Перейти к следующему этапу
                      </DropdownMenuItem>
                      <DropdownMenuItem>Закрыть сделку</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-lg">{deal.amount}</span>
                  </div>
                  <Badge variant={getStageColor(deal.stage)}>
                    {getStageText(deal.stage)}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Вероятность закрытия</span>
                    <span className="font-medium">{deal.probability}%</span>
                  </div>
                  <Progress value={deal.probability} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{deal.contact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {deal.daysLeft > 0 ? `${deal.daysLeft} дней` : "Закрыта"}
                    </span>
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

export default Deals;
