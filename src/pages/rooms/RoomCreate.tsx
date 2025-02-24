
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

const RoomCreate = () => {
  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/rooms">
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">إضافة غرفة جديدة</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>بيانات الغرفة</CardTitle>
          <CardDescription>أدخل بيانات الغرفة الجديدة</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="number">رقم الغرفة</label>
                <Input id="number" placeholder="مثال: 101" />
              </div>
              <div className="space-y-2">
                <label htmlFor="type">نوع الغرفة</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الغرفة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">غرفة مفردة</SelectItem>
                    <SelectItem value="double">غرفة مزدوجة</SelectItem>
                    <SelectItem value="suite">جناح</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="price">السعر لليلة الواحدة</label>
                <Input id="price" type="number" placeholder="مثال: 200" />
              </div>
              <div className="space-y-2">
                <label htmlFor="status">الحالة</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر حالة الغرفة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">متاحة</SelectItem>
                    <SelectItem value="occupied">مشغولة</SelectItem>
                    <SelectItem value="maintenance">تحت الصيانة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link to="/rooms">إلغاء</Link>
              </Button>
              <Button>حفظ</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomCreate;
