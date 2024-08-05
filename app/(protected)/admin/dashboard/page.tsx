import Breadcrumb from "@/components/Common/Breadcrumb";
import { Query } from "@/types/quries";
import QueryList from "./QueryList";
import { Tabs } from "@/components/ui/tabs";
import { getUser } from "@/lib/getuser";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/signin");
  }
  const tabs = [
    {
      title: "Latest",
      value: "latest",
      content: <QueryList tab="unseen" />,
    },
    {
      title: "Seen",
      value: "unread",
      content: <QueryList tab="seen" />,
    },
    {
      title: "Replied",
      value: "replied",
      content: <QueryList tab="replied" />,
    },
    {
      title: "All",
      value: "all",
      content: <QueryList tab="all" />,
    },
  ];
  return (
    <>
      <Breadcrumb pageName="Dashboard" description="" />
      <main className="container mx-auto space-y-10 overflow-hidden pb-16 pt-16 md:pb-20 lg:pb-28">
        <Tabs tabs={tabs} />
      </main>
    </>
  );
};

export default DashboardPage;
