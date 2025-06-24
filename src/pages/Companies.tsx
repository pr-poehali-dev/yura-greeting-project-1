
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Конверсия по месяцам</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}`, 'Сделки']} />
                  <Line type="monotone" dataKey="deals" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Топ менеджеров</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topManagers.map((manager, index) => (
                  <div key={manager.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-600">#{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{manager.name}</p>
                        <p className="text-sm text-gray-/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  Filter,
  Building2,
  Users,
  DollarSign,
  MoreHorizontal,600">{manager.deals} сделок</p>
                      </div>
                    
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu</div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">
                        {managerTrigger,
} from "@/components/ui/dropdown-menu";.sales.toLocaleString()} ₽
                      </p>
                    </div>
                  </div

const Companies = () => {
  const companies = [
    {
      id: 1,
      name>
                ))}
              : 'ООО "Тех</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
