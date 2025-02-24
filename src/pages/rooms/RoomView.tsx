
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

const RoomView = () => {
  const { id } = useParams();

  const room = {
    id: id,
    number: "101",
    type: "غرفة مفردة",
    status: "متاحة",
    price: 200,
    facilities: ["تكييف", "تلفاز", "واي فاي", "ميني بار"],
    lastCleaned: "2024-02-20",
    nextMaintenance: "2024-03-20",
  };

  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/rooms">
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">غرفة {room.number}</h1>
        </div>
        <Button asChild>
          <Link to={`/rooms/${id}/edit`} className="gap-2">
            <Pencil className="h-4 w-4" />
            تعديل
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>معلومات الغرفة</CardTitle>
            <CardDescription>البيانات الأساسية للغرفة</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">رقم الغرفة</span>
              <span className="font-medium">{room.number}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">النوع</span>
              <span className="font-medium">{room.type}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">الحالة</span>
              <span className="font-medium">{room.status}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">السعر</span>
              <span className="font-medium">{room.price} ريال / ليلة</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>المرافق والصيانة</CardTitle>
            <CardDescription>مرافق الغرفة ومواعيد الصيانة</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">المرافق</h3>
              <div className="flex flex-wrap gap-2">
                {room.facilities.map((facility) => (
                  <span
                    key={facility}
                    className="px-2 py-1 text-sm bg-primary/10 text-primary rounded"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">آخر تنظيف</span>
              <span className="font-medium">{room.lastCleaned}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">الصيانة القادمة</span>
              <span className="font-medium">{room.nextMaintenance}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoomView;
