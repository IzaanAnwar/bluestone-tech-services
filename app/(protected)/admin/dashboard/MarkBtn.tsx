"use client";

import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export const MarkBtn = ({ id }: { id: string }) => {
  const markAsReadMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/queries/mark?id=${id}`, {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Failed to mark as read");
      }
      const data = (await response.json()) as { message: string };
      return data;
    },
    mutationKey: ["markAsRead", id],
    onError: (error) => {
      console.error(error);
      toast.error(error?.message ?? "Something went wrong");
    },
    onSuccess: (data) => {
      toast.success(data?.message ?? "Query marked as read successfully");
    },
  });
  return (
    <button
      disabled={markAsReadMutation.isPending}
      className="min-w-fit rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white"
      onClick={() => markAsReadMutation.mutate()}
    >
      {markAsReadMutation.isPending ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" /> Marking as read...
        </span>
      ) : (
        "Mark as read"
      )}
    </button>
  );
};
