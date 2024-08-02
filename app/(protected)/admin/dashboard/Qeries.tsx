import { Query } from "@/types/quries";
import Link from "next/link";
import { MarkBtn } from "./MarkBtn";
import moment from "moment";

export function UserQuery(props: Query) {
  return (
    <div className="w-full rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
      <div
        className="wow fadeInUp rounded-xl  bg-white p-8  dark:bg-dark  lg:px-5 xl:px-8"
        data-wow-delay=".1s"
      >
        <Link href={`/admin/dashboard/${props.id}`} className="group block">
          <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color duration-200 group-hover:text-black dark:border-white dark:border-opacity-10 dark:text-white dark:group-hover:text-zinc-400">
            {props.query}
          </p>
        </Link>
        <div className="flex items-center justify-between">
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {props.username}
            </h3>
            <p className="text-sm text-body-color">{props.email}</p>
            {props.createdAt && (
              <p className="text-sm text-body-color">
                {moment(props.createdAt as Date).fromNow()}
              </p>
            )}
          </div>
          <div className="flex  items-center justify-end gap-2">
            <span className="flex w-fit items-center rounded-xl border border-primary px-2 py-1">
              {props.status}
            </span>
            {props.status === "unseen" && <MarkBtn id={props.id} />}
          </div>
        </div>
      </div>
    </div>
  );
}
