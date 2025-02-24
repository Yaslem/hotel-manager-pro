
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const guests = [
  {
    id: 1,
    name: "أحمد محمد",
    phone: "0123456789",
    email: "ahmed@example.com",
    nationality: "سعودي",
    identityNumber: "1234567890",
    visits: 3,
  },
  // Add more guest data as needed
];

const Guests = () => {
  return (
    <div className="space-y-6 animate-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">النزلاء</h1>
        <Button asChild>
          <Link to="/guests/create" className="gap-2">
            <Plus className="h-5 w-5" />
            إضافة نزيل
          </Link>
        </Button>
      </div>

      <div className="flex gap-4">
        <Input
          placeholder="البحث عن نزيل..."
          className="max-w-sm"
          type="search"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guests.map((guest) => (
          <Card key={guest.id} className="hover-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">
                {guest.name}
              </CardTitle>
              <div className="space-x-2 rtl:space-x-reverse">
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/guests/${guest.id}`}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/guests/${guest.id}/edit`}>
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
                <p>الهاتف: {guest.phone}</p>
                <p>البريد: {guest.email}</p>
                <p>الجنسية: {guest.nationality}</p>
                <p>عدد الزيارات: {guest.visits}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Guests;
