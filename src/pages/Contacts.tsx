import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  Filter,
  Phone,
  Mail,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Contacts = () => {
  const contacts = [
    {
      id: 1,
      name: "Иван Петров",
      email: "ivan@example.com",
      phone: "+7 (999) 123-45-67",
      company: 'ООО "Техком"',
      status: "active",
    },
    {
      id: 2,
      name: "Мария Сидорова",
      email: "maria@company.ru",
      phone: "+7 (999) 234-56-78",
      company: "Альфа Групп",
      status: "lead",
    },
    {
      id: 3,
      name: "Александр Козлов",
      email: "alex@startup.io",
      phone: "+7 (999) 345-67-89",
      company: "StartupIO",
      status: "active",
    },
    {
      id: 4,
      name: "Елена Васильева",
      email: "elena@corp.com",
      phone: "+7 (999) 456-78-90",
      company: "BigCorp",
      status: "inactive",
    },
    {
      id: 5,
      name: "Дмитрий Новиков",
      email: "dmitry@tech.ru",
      phone: "+7 (999) 567-89-01",
      company: "TechSolutions",
      status: "lead",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Контакты</h2>
            <p className="text-gray-600">Управление базой контактов</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Добавить контакт
          </Button>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Поиск контактов..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Фильтры
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Список контактов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {contact.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-gray-600">{contact.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{contact.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{contact.phone}</span>
                    </div>
                    <Badge
                      variant={
                        contact.status === "active"
                          ? "default"
                          : contact.status === "lead"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {contact.status === "active" && "Активный"}
                      {contact.status === "lead" && "Лид"}
                      {contact.status === "inactive" && "Неактивный"}
                    </Badge>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Редактировать</DropdownMenuItem>
                        <DropdownMenuItem>Создать сделку</DropdownMenuItem>
                        <DropdownMenuItem>Удалить</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Contacts;
