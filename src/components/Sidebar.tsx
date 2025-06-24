import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  Handshake,
  CheckSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Дашборд", href: "/", icon: LayoutDashboard },
  { name: "Контакты", href: "/contacts", icon: Users },
  { name: "Компании", href: "/companies", icon: Building2 },
  { name: "Сделки", href: "/deals", icon: Handshake },
  { name: "Задачи", href: "/tasks", icon: CheckSquare },
  { name: "Отчёты", href: "/reports", icon: BarChart3 },
  { name: "Настройки", href: "/settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r">
      <nav className="mt-8 px-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              )
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
