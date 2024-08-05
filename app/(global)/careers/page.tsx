"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Job } from "@/types/jobs";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

export const dynamic = "force-dynamic";

const DashboardPage = () => {
  const jobsQuery = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const response = await fetch("/api/job");
      if (response.status === 200) {
        const data = await response.json();
        return data as Job[];
      }
      throw new Error(await response.json());
    },
  });

  return (
    <>
      <Breadcrumb pageName="Jobs" description="Current Jobs Openings" />
      <main className="container mx-auto space-y-10 overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28">
        <div
          className="grid grid-cols-1 gap-x-8 gap-y-14 py-16 dark:bg-black md:grid-cols-2 md:py-20 lg:grid-cols-3 lg:py-28"
          data-wow-delay=".1s"
        >
          {jobsQuery.data?.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.description}
              jobType={job.jobType}
              contact={job.contact}
              createdAt={job.createdAt}
              updatedAt={job.updatedAt}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default DashboardPage;

function JobCard(props: Job) {
  return (
    <div className=" w-full">
      <div
        className="wow fadeInUp rounded-sm bg-white p-8 shadow-two dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color duration-200  dark:border-white dark:border-opacity-10 dark:text-white">
          {props.title}
        </p>
        <p className="mb-4 text-sm text-body-color dark:text-white">
          {props.description}
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
