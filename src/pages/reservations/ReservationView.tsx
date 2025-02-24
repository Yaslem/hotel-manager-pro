
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

const ReservationView = () => {
  const { id } = useParams();

  const reservation = {
    id: id,
    roomNumber: "101",
    guestName: "أحمد محمد",
    checkIn: "2024-02-25",
    checkOut: "2024-02-28",
    status: "مؤكد",
    totalPrice: 600,
    guestDetails: {
      phone: "0123456789",
      email: "ahmed@example.com",
      identity: "1234567890",
    },
    paymentStatus: "مدفوع",
    paymentMethod: "بطاقة ائتمان",
    notes: "لا توجد ملاحظات خاصة",
  };

  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/reservations">
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">حجز غرفة {reservation.roomNumber}</h1>
        </div>
        <Button asChild>
          <Link to={`/reservations/${id}/edit`} className="gap-2">
            <Pencil className="h-4 w-4" />
            تعديل
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>معلومات الحجز</CardTitle>
            <CardDescription>البيانات الأساسية للحجز</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">رقم الغرفة</span>
              <span className="font-medium">{reservation.roomNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">اسم النزيل</span>
              <span className="font-medium">{reservation.guestName}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">تاريخ الدخول</span>
              <span className="font-medium">{reservation.checkIn}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">تاريخ الخروج</span>
              <span className="font-medium">{reservation.checkOut}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">الحالة</span>
              <span className="font-medium">{reservation.status}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">السعر الإجمالي</span>
              <span className="font-medium">{reservation.totalPrice} ريال</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>معلومات النزيل والدفع</CardTitle>
            <CardDescription>بيانات النزيل وتفاصيل الدفع</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">رقم الهاتف</span>
              <span className="font-medium">{reservation.guestDetails.phone}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">البريد الإلكتروني</span>
              <span className="font-medium">{reservation.guestDetails.email}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">رقم الهوية</span>
              <span className="font-medium">{reservation.guestDetails.identity}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">حالة الدفع</span>
              <span className="font-medium">{reservation.paymentStatus}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">طريقة الدفع</span>
              <span className="font-medium">{reservation.paymentMethod}</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">ملاحظات</h3>
              <p className="text-sm text-muted-foreground">{reservation.notes}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReservationView;
