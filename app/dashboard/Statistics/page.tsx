import { Card } from "@/components/ui/card";
import { ScrollText, Zap, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    title: "Content generated",
    icon: <ScrollText />,
    count: 2847,
    info: "+12% from last month",
  },
  {
    title: "Active Projects",
    icon: <Users />,
    count: 18,
    info: "+3 from last month",
  },
  {
    title: "credit used",
    icon: <Zap />,
    count: 1230,
    info: "73% from last month",
  },
  {
    title: "Performance",
    icon: <TrendingUp />,
    count: 94.2,
    info: "+2.1% from last month",
  },
];
const Statistcs = () => {
  return (
    <div className=" flex flex-row justify-center gap-6 items-stretch flex-wrap my-8 ">
      {stats.map(({ ...item }, index) => (
        <div key={index} className="w-56 h-32 rounded-lg">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default Statistcs;
