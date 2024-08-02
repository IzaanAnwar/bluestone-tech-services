"use client";
import { use, useState } from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactMutation = useMutation({
    mutationKey: ["contact"],
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      const response = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data?.message ?? "Message sent successfully");
    },
    onError: (error) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  return (
    <form>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border-2 border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="message"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              rows={5}
              placeholder="Enter your Message"
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
                if (!name || !email || !message) {
                  toast.error("Please fill all the fields");
                  return;
                }
                contactMutation.mutate({
                  name,
                  email,
                  message,
                });
              }}
              type="button"
              className="w-full"
              disabled={contactMutation.isPending}
            >
              {contactMutation.isPending ? (
                <p className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" />
                  <span>Sending</span>
                </p>
              ) : (
                "Get a quote"
              )}
            </button>
          </HoverBorderGradient>
        </div>
      </div>
    </form>
  );
}
