
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const GuestEdit = () => {
  const { id } = useParams();

  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/guests">
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">تعديل بيانات النزيل</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>بيانات النزيل</CardTitle>
          <CardDescription>قم بتعديل بيانات النزيل</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name">الاسم الكامل</label>
                <Input 
                  id="name" 
                  placeholder="أدخل الاسم الكامل"
                  defaultValue="أحمد محمد"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone">رقم الهاتف</label>
                <Input 
                  id="phone" 
                  placeholder="أدخل رقم الهاتف"
                  defaultValue="0123456789"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">البريد الإلكتروني</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="أدخل البريد الإلكتروني"
                  defaultValue="ahmed@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="nationality">الجنسية</label>
                <Input 
                  id="nationality" 
                  placeholder="أدخل الجنسية"
                  defaultValue="سعودي"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="identityNumber">رقم الهوية</label>
                <Input 
                  id="identityNumber" 
                  placeholder="أدخل رقم الهوية"
                  defaultValue="1234567890"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="birthDate">تاريخ الميلاد</label>
                <Input 
                  id="birthDate" 
                  type="date"
                  defaultValue="1990-01-01"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="outline" asChild>
                <Link to="/guests">إلغاء</Link>
              </Button>
              <Button>حفظ التعديلات</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuestEdit;
