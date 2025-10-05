"use client";

import { Card } from "@/components/ui/card";
import { ScrollText, Zap, TrendingUp, Users } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
const stats = [
  {
    title: "Content generated",
    icon: <ScrollText />,
    count: "2,847",
    info: "+12% from last month",
  },
  {
    title: "Active Projects",
    icon: <Users />,
    count: "18",
    info: "+3 from last month",
  },
  {
    title: "credit used",
    icon: <Zap />,
    count: "1,230",
    info: "73% from last month",
  },
  {
    title: "Performance",
    icon: <TrendingUp />,
    count: "94.2",
    info: "+2.1% from last month",
  },
];
const Statistcs = () => {
  const { open } = useSidebar();
  return (
    <div
      className={` flex flex-row justify-between gap-6 items-stretch flex-wrap my-8`}
    >
      {stats.map(({ ...item }, index) => (
        <div
          key={index}
          className={`${
            open ? "w-56 " : "w-64"
          } rounded-2xl transition-all ease-in delay-75 duration-75`}
        >
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default Statistcs;
