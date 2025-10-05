import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const PromptField = () => {
  return (
    <>
      <div className="p-0.25 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 my-6">
        <div className="flex flex-col gap-8 p-8 bg-[#18181b] rounded-2xl">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold">Content Prompt</h1>
            <div>
              <Input
                placeholder="Describe what you want to create...Be specific abouttone, audience,and key points you want to include."
                type="text"
                id="prompt-field"
                className="bg-[#131315] rounded-xl placeholder:text-[#6d6d6e] focus-visible:outline-none h-40 px-4 text-base leading-none pb-4
        "
              />
            </div>
            <div className="flex flex-row justify-between items-center ">
              <div className="text-xs">
                <span>Blog</span>
                <span>0/500 characters</span>
              </div>
              <div>
                <Button
                  variant={"secondary"}
                  className="p-6 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 my-6 flex items-center justify-center gap-4"
                >
                  <Send />
                  <span className="text-xl font-semibold">
                    Generate Prompt
                  </span>{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromptField;
