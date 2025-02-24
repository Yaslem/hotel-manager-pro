
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full flex-row-reverse">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
