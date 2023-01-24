import React from "react";
import { Outlet } from "react-router-dom";

import StaticSidebar from "../organisms/dashboard-nav";
import MobileNav from "../organisms/mobile-nav";
import TopNav from "../organisms/top-nav";

const DashboardTemplate = ({ children }: { children?: any }) => {
  return (
    <>
      <MobileNav />

      <StaticSidebar />

      <div className="flex flex-1 flex-col md:pl-64">
        <TopNav />

        <main className="flex-1 pb-16">{children ?? <Outlet />}</main>
      </div>
    </>
  );
};

export default DashboardTemplate;
