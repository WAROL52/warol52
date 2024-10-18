"use client";

import { Tabs } from "./ui/tabs";

export type TabsPageProps = {
  tabs: {
    title: string;
    value: string;
    content: JSX.Element;
  }[];
};

export function TabsPage({ tabs }: TabsPageProps) {
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
