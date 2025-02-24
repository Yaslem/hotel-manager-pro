
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    number: "101",
    type: "غرفة مفردة",
    status: "متاحة",
    price: 200,
  },
  // Add more room data as needed
];

const Rooms = () => {
  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">الغرف</h1>
        <Button asChild>
          <Link to="/rooms/create" className="gap-2">
            <Plus className="h-5 w-5" />
            إضافة غرفة
          </Link>
        </Button>
      </div>

      <div className="flex gap-4">
        <Input
          placeholder="البحث عن غرفة..."
          className="max-w-sm"
          type="search"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.id} className="hover-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                غرفة {room.number}
              </CardTitle>
              <div className="space-x-2 rtl:space-x-reverse">
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/rooms/${room.id}`}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/rooms/${room.id}/edit`}>
                    <Pencil className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive">
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                <p>{room.type}</p>
                <p>{room.status}</p>
                <p className="font-bold mt-2">{room.price} ريال / ليلة</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
