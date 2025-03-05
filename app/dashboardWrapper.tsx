/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import StoreProvider, { useAppSelector } from "./redux";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isSidebarClosed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isInDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() =>{
    if(isInDarkMode) {
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  })

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <SideBar />
      <main
        className={`dark:bg-dark-bg z-0 flex w-full flex-col bg-gray-50 ${isSidebarClosed?"":'md:pl-64'}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
}

function DashboardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
}

export default DashboardWrapper;
