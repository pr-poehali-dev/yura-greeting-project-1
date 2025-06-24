import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, DollarSign, Calendar, User } from "lucide-react";

const Deals = () => {
  const dealStages = [
    {
      name: "Лиды",
      deals: [
        {
          id: 1,
          title: "Поставка оборудования",
          value: 150000,
          company: 'ООО "Техком"',
          contact: "Иван Петров",
          date: "2024-01-15",
        },
        {
          id: 2,
          title: "Консультационные услуги",
          value: 75000,
          company: "StartupIO",
          contact: "Александр Козлов",
          date: "2024-01-20",
        },
      ],
    },
    {
      name: "Квалификация",
      deals: [
        {
          id: 3,
          title: "Разработка ПО",
          value: 500000,
          company: "Альфа Групп",
          contact: "Мария Сидорова",
          date: "2024-01-10",
        },
      ],
    },
    {
      name: "Предложение",
      deals: [
        {
          id: 4,
          title: "Интеграция систем",
          value: 300000,
          company: "BigCorp",
          contact: "Елена Васильева",
          date: "2024-01-05",
        },
        {
          id: 5,
          title: "Обучение персонала",
          value: 120000,
          company: "TechSolutions",
          contact: "Дмитрий Новиков",
          date: "2024-01-12",
        },
      ],
    },
    {
      name: "Переговоры",
      deals: [
        {
          id: 6,
          title: "Лицензирование",
          value: 80000,
          company: "InnovateCorp",
          contact: "Анна Смирнова",
          date: "2024-01-08",
        },
      ],
    },
    {
      name: "Закрытие",
      deals: [
        {
          id: 7,
          title: "Модернизация сайта",
          value: 200000,
          company: "WebStudio",
          contact: "Сергей Волков",
          date: "2024-01-03",
        },
      ],
    },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Сделки</h2>
            <p className="text-gray-600">
              Канбан-доска для управления сделками
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Новая сделка
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {dealStages.map((stage, stageIndex) => (
            <div key={stage.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{stage.name}</h3>
                <Badge variant="secondary">{stage.deals.length}</Badge>
              </div>

              <div className="space-y-3">
                {stage.deals.map((deal) => (
                  <Card
                    key={deal.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <h4 className="font-medium text-gray-900">
                          {deal.title}
                        </h4>

                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-600">
                            {formatCurrency(deal.value)}
                          </span>
                        </div>

                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <User className="h-3 w-3" />
                            <span>{deal.contact}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(deal.date).toLocaleDateString("ru-RU")}
                            </span>
                          </div>
                        </div>

                        <div className="pt-2 border-t">
                          <p className="text-xs text-gray-500">
                            {deal.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Button
                  variant="dashed"
                  className="w-full border-dashed border-2 border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-600"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Добавить сделку
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Deals;
