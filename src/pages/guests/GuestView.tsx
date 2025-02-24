
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Pencil } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const GuestView = () => {
  const { id } = useParams();

  const guest = {
    id: id,
    name: "أحمد محمد",
    phone: "0123456789",
    email: "ahmed@example.com",
    nationality: "سعودي",
    identityNumber: "1234567890",
    birthDate: "1990-01-01",
    visits: 3,
    lastVisit: "2024-02-20",
    totalSpent: 1800,
    preferences: ["غرفة هادئة", "إفطار مبكر", "طابق علوي"],
    notes: "نزيل منتظم",
  };

  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/guests">
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{guest.name}</h1>
        </div>
        <Button asChild>
          <Link to={`/guests/${id}/edit`} className="gap-2">
            <Pencil className="h-4 w-4" />
            تعديل
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>المعلومات الشخصية</CardTitle>
            <CardDescription>البيانات الأساسية للنزيل</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">الاسم</span>
              <span className="font-medium">{guest.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">رقم الهاتف</span>
              <span className="font-medium">{guest.phone}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">البريد الإلكتروني</span>
              <span className="font-medium">{guest.email}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">الجنسية</span>
              <span className="font-medium">{guest.nationality}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">رقم الهوية</span>
              <span className="font-medium">{guest.identityNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">تاريخ الميلاد</span>
              <span className="font-medium">{guest.birthDate}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>معلومات الزيارات</CardTitle>
            <CardDescription>إحصائيات وتفضيلات النزيل</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">عدد الزيارات</span>
              <span className="font-medium">{guest.visits}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">آخر زيارة</span>
              <span className="font-medium">{guest.lastVisit}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">إجمالي المصروفات</span>
              <span className="font-medium">{guest.totalSpent} ريال</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">التفضيلات</h3>
              <div className="flex flex-wrap gap-2">
                {guest.preferences.map((pref) => (
                  <span
                    key={pref}
                    className="px-2 py-1 text-sm bg-primary/10 text-primary rounded"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">ملاحظات</h3>
              <p className="text-sm text-muted-foreground">{guest.notes}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GuestView;
