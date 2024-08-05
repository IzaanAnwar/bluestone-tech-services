"use client";
import { use, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Job } from "@/types/jobs";

const DashboardPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("");
  const [contact, setContact] = useState("");

  const postJobMutation = useMutation({
    mutationKey: ["postJob"],
    mutationFn: async ({
      title,
      description,
      jobType,
      contact,
    }: {
      title: string;
      description: string;
      jobType: string;
      contact: string;
    }) => {
      const response = await fetch("/api/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, jobType, contact }),
      });
      if (response.status === 201) {
        return await response.json();
      }
      throw new Error(await response.json());
    },
    onSuccess: (data) => {
      toast.success(data?.message ?? "Job added successfully");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  return (
    <>
      <Breadcrumb pageName="Jobs" description="Current Jobs Openings" />
      <main className="container mx-auto space-y-10 overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28">
        <form>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Job Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Enter Job Title"
                  className="w-full rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="jobType"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Contact
                </label>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Job Type
                </label>
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                >
                  <option
                    value="full-time"
                    className="rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base font-semibold text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  >
                    Full-time
                  </option>
                  <option className="rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base font-semibold text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none">
                    Part-time
                  </option>
                  <option className="rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base font-semibold text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none">
                    Internship
                  </option>
                  <option className="rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base font-semibold text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none">
                    Contract
                  </option>
                </select>
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name="message"
                  rows={5}
                  placeholder="Enter job description"
                  className="w-full resize-none rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <HoverBorderGradient
                containerClassName="rounded-xl"
                as="div"
                className="inline-flex min-w-44 animate-shimmer items-center  justify-center rounded-xl border bg-transparent bg-[linear-gradient(110deg,#4A6CF7,45%,#4285f4,55%,#4a6df7)] bg-[length:200%_100%] px-9 py-4 text-base font-medium text-white shadow-submit  transition-colors  duration-300  hover:bg-primary/90  focus:outline-none dark:border-slate-800    dark:shadow-submit-dark"
              >
                <button
                  onClick={() => {
                    if (!title || !contact || !description) {
                      toast.error("Please fill all the fields");
                      return;
                    }
                    console.log({ title, contact, description, jobType });
                    postJobMutation.mutate({
                      title,
                      description,
                      jobType,
                      contact,
                    });
                  }}
                  type="button"
                  className="w-full"
                  disabled={postJobMutation.isPending}
                >
                  {postJobMutation.isPending ? (
                    <p className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" />
                      <span>Posting</span>
                    </p>
                  ) : (
                    "Post Job"
                  )}
                </button>
              </HoverBorderGradient>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default DashboardPage;
