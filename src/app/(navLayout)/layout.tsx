"use client";

import Footer from "@/src/components/shared/Footer";
import { Navbar } from "@/src/components/shared/NavBar";
import { useUser } from "@/src/context/user.provider";
import React, { ReactNode } from "react";
import DashboardLayout from "../(dashboardLayout)/layout";

const NavLayout = ({ children }: { children: ReactNode }) => {
  const user = useUser();
  console.log(user);

  return !user?.loading && user?.user ? (
    <DashboardLayout>{children}</DashboardLayout>
  ) : (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default NavLayout;
