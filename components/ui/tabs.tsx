"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "no-visible-scrollbar relative flex w-full max-w-full flex-row items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative rounded-xl px-4 py-1.5", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-xl bg-primary text-white",
                  activeTabClassName,
                )}
              />
            )}
            <span className="relative block text-inherit dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className=" h-full w-full">
      {tabs.map((tab, idx) => {
        if (!isActive(tab)) {
          return null;
        }
        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={cn(" left-0 top-0 h-full w-full space-y-10", className)}
          >
            {tab.content ?? (
              <div className="min-h-[20vh] w-full text-black">No Content</div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
