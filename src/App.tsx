
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
