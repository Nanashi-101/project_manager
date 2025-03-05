/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Lock, LockIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function SideBar() {
  const [showProjects, setShowProjects] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  return (
    <div className="fixed z-40 flex h-full w-64 flex-col justify-between overflow-y-auto shadow-2xl transition-all duration-300 dark:bg-black">
      <div className="flex flex-col h-full w-full justify-start">
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            ALIGNO
          </div>
        </div>
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <div>
            <h3 className="text-md font-bold tracking-wider dark:text-gray-200">
                ALIGNO TEAM
            </h3>
            <div className="flex items-start mt-1 gap-2">
                <LockIcon className="h-4 w-4 dark:text-gray-200 text-gray-500" />
                <p className="text-xs text-gray-500 dark:text-gray-200">Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
