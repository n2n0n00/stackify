import { rigthBarTags } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../search/RenderTag";
import { getTopQuestions } from "@/lib/actions/questions.actions";
import { getTopTags } from "@/lib/actions/tag.actions";

const RightSideBar = async () => {
  const topQuestions = await getTopQuestions({});
  const topTags = await getTopTags({});

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="flex h-full w-fit flex-col gap-4">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        {topQuestions ? (
          topQuestions.map((item) => {
            return (
              <Link
                href={`/questions/${item._id}`}
                className="flex cursor-pointer flex-row items-center justify-between"
                key={item._id}
              >
                <p className="body-medium text-dark500_light700">
                  {item.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="click_arrow"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })
        ) : (
          <div>
            <p>No Questions Found</p>
          </div>
        )}
      </div>

      <div className="flex h-full w-full flex-col gap-4 pt-6">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        {topTags ? (
          topTags.map((item) => {
            return (
              <RenderTag
                key={item._id}
                _id={item._id}
                name={item.name}
                totalQuestions={item.totalQuestions}
                showCount
              />
            );
          })
        ) : (
          <div>
            <p>No Tags Found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RightSideBar;
