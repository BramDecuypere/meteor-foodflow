import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import StaticSidebar from "../organisms/dashboard-nav";
import MobileNav from "../organisms/mobile-nav";
import TopNav from "../organisms/top-nav";

const DashboardTemplate = ({
  children,
  title,
}: {
  children?: any;
  title?: ReactNode;
}) => {
  return (
    <>
      <MobileNav />

      <StaticSidebar />

      <div className="flex flex-1 flex-col md:pl-64">
        <TopNav title={title} />

        <main className="flex-1 pb-16">{children ?? <Outlet />}</main>
      </div>
    </>
  );
};

export default DashboardTemplate;
