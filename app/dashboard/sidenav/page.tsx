"use client";
import {
  Brain,
  Sparkles,
  FileText,
  History,
  Settings,
  CreditCard,
  Zap,
  Bot,
  ListCollapse,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarHeader,
  useSidebar,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Brain,
  },
  {
    title: "Generate",
    url: "#",
    icon: Sparkles,
  },
  {
    title: "Document",
    url: "#",
    icon: FileText,
  },
  {
    title: "History",
    url: "#",
    icon: History,
  },
  {
    title: "Billing",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Credits",
    icon: Zap,
    score: 2430,
  },
];

const buttonStyle = {
  borderRight: "2px solid rgba(60,132,246,1)",
  padding: "1.5rem 0 1.5rem 0.5rem",
  background: "inherit",
  cursor: "pointer",
};

const hoverButtonStyle = "hover:text-white transition-all duration-200";

function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();

  return (
    <div>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <Sidebar
          className={`border-[rgb(36,36,41)] `}
          collapsible="offcanvas"
          variant="sidebar"
          side="left"
        >
          <SidebarContent>
            <SidebarGroup className=" bg-[#09090b] text-[rgb(230,230,230)] pt-6">
              <SidebarGroupLabel className="flex flex-row gap-2 items-center mb-4 py-6">
                <div
                  className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center   bg-[linear-gradient(135deg,#3b82f6,#9333ea,#ec4899)]
         shadow-lg shadow-purple-500/40 hover:opacity-90 transition"
                >
                  <Bot className="h-6 w-6 text-[#ffffff] " />
                </div>
                <div className="text-2xl text-[rgb(230,230,230)] leading-6  ">
                  <h1 className="">NeuralForge</h1>
                  <p className="text-sm font-light text-[rgb(163,163,163)]">
                    An AI content studio
                  </p>
                </div>
              </SidebarGroupLabel>

              <SidebarSeparator className=" my-4 border-[rgb(36,36,41)] border-t w-full" />
              <SidebarGroupContent>
                <SidebarHeader className="font-semibold">MAIN</SidebarHeader>
                <div className="flex flex-col gap-6 my-4">
                  <div>
                    <SidebarMenu className="text-[rgb(60,132,246)] flex flex-col gap-y-4">
                      {items
                        .map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                              asChild
                              style={buttonStyle}
                              className={`${hoverButtonStyle}`}
                            >
                              {item.url ? (
                                <Link href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <item.icon />
                                  <span>{item.title}</span>
                                </div>
                              )}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))
                        .slice(0, 4)}
                    </SidebarMenu>
                  </div>
                  <div>
                    <SidebarHeader className="font-semibold">
                      ACCOUNT
                    </SidebarHeader>
                    <SidebarMenu className="text-[rgb(60,132,246)] flex flex-col gap-y-4">
                      {items
                        .map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                              asChild
                              style={buttonStyle}
                              className={`${hoverButtonStyle}`}
                            >
                              {item.url ? (
                                <Link href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </Link>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <item.icon />
                                  <span>{item.title}</span>
                                </div>
                              )}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))
                        .slice(4, 6)}
                    </SidebarMenu>
                  </div>
                </div>
                <SidebarSeparator className="border-[rgb(36,36,41)] border-t w-full my-4" />
                <div className="p-0.25 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 my-6 w-48 mx-auto flex justify-center items-center">
                  <SidebarMenu className="bg-[#18181b] rounded-2xl p-2 ">
                    {items
                      .map((item) => (
                        <SidebarMenuItem
                          key={item.title}
                          className="text-[rgb(230,230,230)] p-2 flex flex-col gap-4 items-center"
                        >
                          <div className="flex flex-row justify-between items-center text-sm font-semibold w-[10rem]">
                            <span className="inline-block">{item.title}</span>
                            <item.icon className="text-[rgb(60,132,246)]" />
                          </div>
                          <div className="flex flex-row items-center justify-between gap-4">
                            <div className="loader"></div>
                            <span className="inline-block text-sm">
                              {item.score}
                            </span>
                          </div>
                        </SidebarMenuItem>
                      ))
                      .slice(6, 7)}
                  </SidebarMenu>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}

export default AppSidebar;
