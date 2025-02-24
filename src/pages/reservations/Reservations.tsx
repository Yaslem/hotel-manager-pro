
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const reservations = [
  {
    id: 1,
    roomNumber: "101",
    guestName: "أحمد محمد",
    checkIn: "2024-02-25",
    checkOut: "2024-02-28",
    status: "مؤكد",
    totalPrice: 600,
  },
  // Add more reservation data as needed
];

const Reservations = () => {
  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">الحجوزات</h1>
        <Button asChild>
          <Link to="/reservations/create" className="gap-2">
            <Plus className="h-5 w-5" />
            إضافة حجز
          </Link>
        </Button>
      </div>

      <div className="flex gap-4">
        <Input
          placeholder="البحث عن حجز..."
          className="max-w-sm"
          type="search"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reservations.map((reservation) => (
          <Card key={reservation.id} className="hover-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                غرفة {reservation.roomNumber}
              </CardTitle>
              <div className="space-x-2 rtl:space-x-reverse">
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/reservations/${reservation.id}`}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/reservations/${reservation.id}/edit`}>
                    <Pencil className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>النزيل: {reservation.guestName}</p>
                <p>من: {reservation.checkIn}</p>
                <p>إلى: {reservation.checkOut}</p>
                <p>الحالة: {reservation.status}</p>
                <p className="font-bold mt-2">الإجمالي: {reservation.totalPrice} ريال</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
