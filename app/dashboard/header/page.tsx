"use client";
import { useSidebar, SidebarSeparator } from "@/components/ui/sidebar";
import { ListCollapse } from "lucide-react";
const Header = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <div className="  ">
        <div className="w-[95%] mx-auto flex flex-row justify-between items-center pt-4">
          <button onClick={toggleSidebar}>
            <ListCollapse
              className={`cursor-pointer text-[rgb(230,230,230)] bg-[#101012] rounded-2xl  h-6 w-6 shadow-2xl shadow-amber-50 border-[0.5px] border-[#101012] 
             `}
            />
          </button>
          <span className="inline-block text-sm text-[#a3a3a3]">
            AI-Powered Content Generation
          </span>
        </div>
      </div>
      <SidebarSeparator className="border-[rgb(36,36,41)] border-t w-full my-4" />
      <div className="flex flex-col gap-2 w-[95%] mx-auto">
        <h1 className="font-extrabold text-4xl">
          Welcome back, <span className="text-[#3c84f6] ">Creator</span>{" "}
        </h1>
        <span className="font-medium text-xl text-[#a3a3a3] inline-block">
          Ready to generate some amazing content with AI?
        </span>
      </div>
    </>
  );
};
export default Header;
