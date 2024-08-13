"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Query } from "@/types/quries";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { UserQuery } from "../Qeries";
import { MarkBtn } from "../MarkBtn";
import moment from "moment";

const QueryPage = ({ params }: { params: { queryId: string } }) => {
  const [message, setMessage] = useState("");
  const openedQuery = useQuery({
    queryKey: ["query", params.queryId],
    queryFn: async () => {
      const response = await fetch(
        `/api/queries/reply?queryId=${params.queryId}`,
      );
      const data = await response.json();
      console.log({ data });

      return data as Query;
    },
  });
  const contactMutation = useMutation({
    mutationKey: ["contact"],
    mutationFn: async ({ message }: { message: string }) => {
      const response = await fetch("/api/queries/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, queryId: params.queryId }),
      });
      return await response.json();
    },
    onSuccess: (data) => {
      toast.success(data?.message ?? "Message sent successfully");
      openedQuery.refetch();
    },
    onError: (error) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });

  return (
    <>
      <Breadcrumb pageName="Reply to Query" description="" />
      <main className="container mx-auto space-y-10 overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28">
        {openedQuery.isPending && <Loader2 className="animate-spin" />}
        {!openedQuery.isPending && openedQuery.data && (
          <div className="w-full rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] duration-500 ">
            <div
              className="wow fadeInUp rounded-xl  bg-white p-8  dark:bg-dark  lg:px-5 xl:px-8"
              data-wow-delay=".1s"
            >
              <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color duration-200 group-hover:text-black dark:border-white dark:border-opacity-10 dark:text-white dark:group-hover:text-zinc-400">
                {openedQuery.data.query}
              </p>
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                    {openedQuery.data.username}
                  </h3>
                  <p className="text-sm text-body-color">
                    {openedQuery.data.email}
                  </p>
                  {openedQuery.data?.createdAt && (
                    <p className="text-sm text-body-color">
                      {moment(openedQuery.data?.createdAt as Date).fromNow()}
                    </p>
                  )}
                </div>
                <div className="flex  items-center justify-end gap-2">
                  <span className="flex w-fit items-center rounded-xl border border-primary px-2 py-1">
                    {openedQuery.data.status}
                  </span>
                  {openedQuery.data.status === "unseen" && (
                    <MarkBtn id={openedQuery.data.id} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {openedQuery?.data?.status === "replied" && (
          <div className="group block">
            <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color duration-200 group-hover:text-black dark:border-white dark:border-opacity-10 dark:text-white dark:group-hover:text-zinc-400">
              Your Sent Emails
            </p>
            {openedQuery.data.replies?.map((reply) => (
              <div
                key={reply.id}
                className="my-2 w-full rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] duration-500 "
              >
                <div
                  className="wow fadeInUp rounded-xl  bg-white p-8  dark:bg-dark  lg:px-5 xl:px-8"
                  data-wow-delay=".1s"
                >
                  <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color duration-200 group-hover:text-black dark:border-white dark:border-opacity-10 dark:text-white dark:group-hover:text-zinc-400">
                    {reply.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="w-full">
                      <h3 className="mb-1  font-semibold text-dark dark:text-white ">
                        {reply.to}
                      </h3>
                      <p className="text-sm text-body-color">
                        {moment(reply.createdAt).fromNow()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="w-full ">
          <div
            className="wow fadeInUp mb-12 rounded-xl bg-white px-8 py-11  shadow-three duration-500 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s
              "
          >
            <form>
              <div className="-mx-4 flex flex-wrap">
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
                    className="inline-flex min-w-44 animate-shimmer items-center  justify-center rounded-xl border bg-transparent bg-[linear-gradient(110deg,#4A6CF7,45%,#4285f4,55%,#4a6df7)] bg-[length:200%_100%] px-9 py-3 text-base font-medium text-white shadow-submit  transition-colors  duration-300  hover:bg-primary/90  focus:outline-none dark:border-slate-800    dark:shadow-submit-dark"
                  >
                    <button
                      onClick={() => {
                        if (!message) {
                          toast.error("Please fill all the fields");
                          return;
                        }
                        contactMutation.mutate({
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
                        "Send Message"
                      )}
                    </button>
                  </HoverBorderGradient>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default QueryPage;
