
import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Rooms
import Rooms from "./pages/rooms/Rooms";
import RoomCreate from "./pages/rooms/RoomCreate";
import RoomEdit from "./pages/rooms/RoomEdit";
import RoomView from "./pages/rooms/RoomView";

// Reservations
import Reservations from "./pages/reservations/Reservations";
import ReservationCreate from "./pages/reservations/ReservationCreate";
import ReservationEdit from "./pages/reservations/ReservationEdit";
import ReservationView from "./pages/reservations/ReservationView";

// Guests
import Guests from "./pages/guests/Guests";
import GuestCreate from "./pages/guests/GuestCreate";
import GuestEdit from "./pages/guests/GuestEdit";
import GuestView from "./pages/guests/GuestView";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Index />} />
                
                {/* Rooms Routes */}
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/rooms/create" element={<RoomCreate />} />
                <Route path="/rooms/:id/edit" element={<RoomEdit />} />
                <Route path="/rooms/:id" element={<RoomView />} />
                
                {/* Reservations Routes */}
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/reservations/create" element={<ReservationCreate />} />
                <Route path="/reservations/:id/edit" element={<ReservationEdit />} />
                <Route path="/reservations/:id" element={<ReservationView />} />
                
                {/* Guests Routes */}
                <Route path="/guests" element={<Guests />} />
                <Route path="/guests/create" element={<GuestCreate />} />
                <Route path="/guests/:id/edit" element={<GuestEdit />} />
                <Route path="/guests/:id" element={<GuestView />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
