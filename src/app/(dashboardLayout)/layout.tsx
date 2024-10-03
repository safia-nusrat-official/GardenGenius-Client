import SideBar from "@/src/components/shared/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <main className="container mx-auto mt-14 m max-w-7xl flex-grow">{children}</main>
    </div>
  );
}
