"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

const PromptField = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <div className="p-0.25 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 my-6">
        <div className="flex flex-col gap-8 px-6 py-4 bg-[#18181b] rounded-2xl">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold">Content Prompt</h1>
            <div>
              {/* <Input
                placeholder="Describe what you want to create...Be specific abouttone, audience,and key points you want to include."
                type="text"
                id="prompt-field"
                className="bg-[#131315] rounded-xl placeholder:text-[#6d6d6e] focus-visible:outline-none h-40 px-4 text-base leading-none 
        "
              /> */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className=" rounded-xl placeholder:text-[#6d6d6e]  text-base 
                  "
                >
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Describe what you want to create...Be specific
                          abouttone, audience,and key points you want to
                          include."
                            className="resize-none bg-[#131315] h-40"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-row justify-between items-center ">
                    <div className="text-sm flex flex-row gap-4">
                      <span className="text-[#fafafa] inline-block ">Blog</span>
                      <span className="text-[#6d6d6e] inline-block">
                        0/500 characters
                      </span>
                    </div>
                    <div className="text-[#fafafa]">
                      <Button
                        type="submit"
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
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromptField;
