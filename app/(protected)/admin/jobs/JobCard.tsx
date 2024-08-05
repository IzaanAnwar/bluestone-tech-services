"use client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Job } from "@/types/jobs";
import Link from "next/link";
import { Loader2, Trash2Icon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export function JobCard(
  props: Job & { refetch: Dispatch<SetStateAction<boolean>> },
) {
  const router = useRouter();
  const deleteJobMutation = useMutation({
    mutationKey: ["deleteJob", { jobId: props.id }],
    mutationFn: async () => {
      const response = await fetch(`/api/job?jobId=${props.id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        return await response.json();
      }
      throw new Error(await response.json());
    },
    onSuccess: (data) => {
      toast.success(data?.message ?? "Job deleted successfully");
      props.refetch(true);
    },
    onError: (error) => {
      toast.error(error?.message ?? "Something went wrong");
    },
  });
  return (
    <div className="relative w-full">
      <div
        className="wow fadeInUp rounded-sm bg-white p-8 shadow-two dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <div className="absolute right-3 top-3">
          <button
            type="button"
            onClick={() => {
              deleteJobMutation.mutate();
            }}
            className="rounded-full bg-red-500 p-2 text-sm font-medium text-white hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-500"
          >
            {deleteJobMutation.isPending ? (
              <Loader2 className="animate-spin" size={16} />
            ) : (
              <Trash2Icon size={16} />
            )}
          </button>
        </div>
        <Link href={`/admin/jobs/${props.id}`}>
          <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color duration-200 hover:text-primary dark:border-white dark:border-opacity-10 dark:text-white">
            {props.title}
          </p>
        </Link>
        <p className="mb-4 text-sm text-body-color dark:text-white">
          {props.description.slice(0, 500)}
          {props.description.length > 500 ? "..." : ""}
        </p>
        <div className="mb-4 flex items-center">
          <p className="text-sm font-semibold text-body-color dark:text-white">
            {props.jobType}
          </p>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4  w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-briefcase-business"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              Contact: {props.contact}
            </h3>
            <p className="text-sm text-body-color dark:text-white">
              Posted on: {new Date(props.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
