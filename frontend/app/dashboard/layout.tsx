import { Sidebar } from "@/components/Layout/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}