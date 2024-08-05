"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Job } from "@/types/jobs";
import { JobCard } from "./JobCard";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { use, useEffect, useState } from "react";
import { User } from "@/lib/getuser";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const [isRefetch, setIsRefetch] = useState(false);
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

  useEffect(() => {
    async function getUser() {
      const response = await fetch("/api/auth/getuser");
      if (response.status === 200) {
        const data = await response.json();
        if (!data || !data.userId) {
          router.push("/signin");
        }
        return data as User;
      } else {
        router.push("/signin");
      }
    }
    getUser();
  }, [router]);

  useEffect(() => {
    if (isRefetch) {
      jobsQuery.refetch();
    }
  }, [isRefetch]);

  return (
    <>
      <Breadcrumb pageName="Jobs" description="Current Jobs Openings" />
      <main className="container mx-auto space-y-10 overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28">
        <div>
          <button className="hover:shadow-submit-hover rounded-xl bg-primary px-8 py-3 text-base font-medium text-white shadow-submit dark:bg-dark dark:text-white dark:hover:bg-dark/80 ">
            <Link href={"/admin/jobs/new"}>
              <span>New Job</span>
            </Link>
          </button>
        </div>
        <div
          className="grid grid-cols-1 gap-x-8 gap-y-14 py-16 dark:bg-black md:grid-cols-2 md:py-20 lg:grid-cols-3 lg:py-28"
          data-wow-delay=".1s"
        >
          {jobsQuery.data?.map((job) => (
            <JobCard
              refetch={setIsRefetch}
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
