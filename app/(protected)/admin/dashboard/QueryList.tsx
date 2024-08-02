"use client";

import { useQuery } from "@tanstack/react-query";
import { UserQuery } from "./Qeries";
import { Query } from "@/types/quries";
import { Loader2 } from "lucide-react";

export default function QueryList(props: {
  tab: "unseen" | "seen" | "replied" | "all";
}) {
  const queries = useQuery({
    queryKey: ["queries"],
    queryFn: async () => {
      const response = await fetch(`/api/queries?tabs=${props.tab}`);
      if (!response.ok) {
        throw new Error("Failed to fetch queries");
      }
      const data = (await response.json()) as Query[];
      return data;
    },
  });

  if (queries.isLoading) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }
  return (
    <div className="space-y-10">
      {queries.data?.map((query) => (
        <UserQuery
          key={query.id}
          id={query.id}
          email={query.email}
          username={query.username}
          query={query.query}
          status={query.status}
          createdAt={query.createdAt}
          updatedAt={query.updatedAt}
        />
      ))}
    </div>
  );
}
