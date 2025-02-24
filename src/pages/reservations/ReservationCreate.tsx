
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ReservationCreate = () => {
  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/reservations">
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">إضافة حجز جديد</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>بيانات الحجز</CardTitle>
          <CardDescription>أدخل بيانات الحجز الجديد</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="room">رقم الغرفة</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر الغرفة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="101">101 - غرفة مفردة</SelectItem>
                    <SelectItem value="102">102 - غرفة مزدوجة</SelectItem>
                    <SelectItem value="103">103 - جناح</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="guestName">اسم النزيل</label>
                <Input id="guestName" placeholder="أدخل اسم النزيل" />
              </div>
              <div className="space-y-2">
                <label htmlFor="checkIn">تاريخ الدخول</label>
                <Input id="checkIn" type="date" />
              </div>
              <div className="space-y-2">
                <label htmlFor="checkOut">تاريخ الخروج</label>
                <Input id="checkOut" type="date" />
              </div>
              <div className="space-y-2">
                <label htmlFor="status">حالة الحجز</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر حالة الحجز" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="confirmed">مؤكد</SelectItem>
                    <SelectItem value="pending">قيد الانتظار</SelectItem>
                    <SelectItem value="cancelled">ملغي</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="price">السعر الإجمالي</label>
                <Input id="price" type="number" placeholder="أدخل السعر" />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link to="/reservations">إلغاء</Link>
              </Button>
              <Button>حفظ</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReservationCreate;
