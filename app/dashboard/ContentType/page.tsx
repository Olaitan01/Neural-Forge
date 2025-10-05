import { CardColumn } from "@/components/ui/card";
import { Sparkle } from "lucide-react";

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
      <div className="bg-[#18181b] rounded-2xl p-4 flex flex-col justify-center items-center mx-auto ">
        <div className="flex flex-row justify-center self-start gap-6 ">
          <Sparkle />
          <span>Content Type</span>
        </div>
        <div className="flex flex-row justify-between items-stretch w-full">
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
