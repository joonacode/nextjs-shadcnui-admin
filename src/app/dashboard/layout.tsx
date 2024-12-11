import { BreadcrumbAuto } from "@/components/elements/breadcrumb-auto";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="p-4">
          <h1 className="font-bold text-4xl mb-3">Dashboard</h1>
          <BreadcrumbAuto />
          <div className="h-4" />
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
