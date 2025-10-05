import { CardColumn } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const contentTypes = [
  { id: "blog", label: "Blog Post", icon: "📝" },
  { id: "social", label: "Social Media", icon: "📱" },
  { id: "email", label: "Email Copy", icon: "📧" },
  { id: "ad", label: "Ad Copy", icon: "🎯" },
  { id: "product", label: "Product Description", icon: "🛍️" },
  { id: "creative", label: "Creative Writing", icon: "✨" },
];
const ContentType = () => {
  return (
    <div className="p-0.25 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 my-6 ">
      <div className="bg-[#18181b] rounded-2xl p-6 flex flex-col gap-6 justify-center items-center mx-auto ">
        <div className="flex flex-row justify-center items-center self-start gap-2 ">
          <Sparkles className="text-[rgb(60,132,246)]" />
          <span className="font-extrabold text-2xl">Content Type</span>
        </div>
        <div className="flex flex-row gap-4 items-stretch w-full flex-wrap ">
          {contentTypes.map(({ label, icon }, index) => (
            <div key={index}>
              <CardColumn title={label} icon={icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentType;
