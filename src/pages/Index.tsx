
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDoubleIcon, CalendarDaysIcon, UsersIcon, TrendingUpIcon } from "lucide-react";

const statsCards = [
  {
    title: "الغرف المتاحة",
    value: "12",
    description: "من أصل 20 غرفة",
    icon: BedDoubleIcon,
    color: "text-teal-600",
    trend: "+2 عن الأمس",
  },
  {
    title: "الحجوزات اليوم",
    value: "5",
    description: "حجوزات جديدة",
    icon: CalendarDaysIcon,
    color: "text-rose-600",
    trend: "+1 عن الأمس",
  },
  {
    title: "النزلاء الحاليين",
    value: "18",
    description: "في الفندق",
    icon: UsersIcon,
    color: "text-blue-600",
    trend: "+3 عن الأمس",
  },
  {
    title: "إجمالي الإيرادات",
    value: "12,500",
    description: "ريال سعودي",
    icon: TrendingUpIcon,
    color: "text-emerald-600",
    trend: "+2,300 عن الأمس",
  },
];

const recentActivity = [
  {
    time: "منذ 10 دقائق",
    description: "تم تسجيل دخول نزيل جديد في الغرفة 101",
    type: "check-in",
  },
  {
    time: "منذ 25 دقيقة",
    description: "تم تأكيد حجز جديد للغرفة 205",
    type: "booking",
  },
  {
    time: "منذ ساعة",
    description: "تم تسجيل خروج من الغرفة 304",
    type: "check-out",
  },
];

const Index = () => {
  return (
    <div className="space-y-8 animate-in">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">مرحباً بك في نظام إدارة الفندق</h1>
        <p className="text-muted-foreground text-lg">
          نظرة عامة على أداء الفندق اليوم
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card) => (
          <Card key={card.title} className="hover-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">{card.title}</CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{card.value}</div>
              <div className="flex items-center justify-between mt-2">
                <CardDescription>{card.description}</CardDescription>
                <span className="text-xs font-medium text-emerald-600">{card.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>النشاط الحديث</CardTitle>
            <CardDescription>آخر التحديثات في الفندق</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b last:border-0 pb-4 last:pb-0"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>توزيع الغرف</CardTitle>
            <CardDescription>حالة الغرف الحالية</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">متاحة</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-emerald-500 rounded" />
                  <span className="text-sm font-medium">12</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">مشغولة</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-rose-500 rounded" />
                  <span className="text-sm font-medium">8</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">قيد التنظيف</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-2 bg-amber-500 rounded" />
                  <span className="text-sm font-medium">4</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">تحت الصيانة</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-slate-500 rounded" />
                  <span className="text-sm font-medium">2</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
