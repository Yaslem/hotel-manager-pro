
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDoubleIcon, CalendarDaysIcon, UsersIcon } from "lucide-react";

const statsCards = [
  {
    title: "الغرف المتاحة",
    value: "12",
    description: "من أصل 20 غرفة",
    icon: BedDoubleIcon,
    color: "text-teal-600",
  },
  {
    title: "الحجوزات اليوم",
    value: "5",
    description: "حجوزات جديدة",
    icon: CalendarDaysIcon,
    color: "text-rose-600",
  },
  {
    title: "النزلاء الحاليين",
    value: "18",
    description: "في الفندق",
    icon: UsersIcon,
    color: "text-blue-600",
  },
];

const Index = () => {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">مرحباً بك في نظام إدارة الفندق</h1>
        <p className="text-muted-foreground text-lg">
          اختر من القائمة الجانبية للوصول إلى مختلف أقسام النظام
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {statsCards.map((card) => (
          <Card key={card.title} className="hover-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">{card.title}</CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{card.value}</div>
              <CardDescription>{card.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
