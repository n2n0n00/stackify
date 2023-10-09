import { rightBarQuestions, rigthBarTags } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TagBtn =
  "subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300";

const RightSideBar = () => {
  return (
    <div className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="flex h-full w-fit flex-col gap-4">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        {rightBarQuestions.map((item) => {
          return (
            <>
              <Link href={item.route} className="flex flex-row justify-between">
                <p className="body-medium text-dark500_light700">
                  {item.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="click_arrow"
                  width={20}
                  height={20}
                />
              </Link>
            </>
          );
        })}
      </div>

      <div className="flex h-full w-full flex-col gap-4 pt-6">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        {rigthBarTags.map((item) => {
          return (
            <>
              <Link
                href={item.route}
                className="flex w-full flex-row items-center justify-between gap-2"
              >
                <p className={`${TagBtn}`}>{item.title}</p>
                <p className="small-medium text-dark500_light700">
                  {item.number}
                </p>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RightSideBar;
