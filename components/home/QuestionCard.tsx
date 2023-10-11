import React from "react";
import RenderTag from "../shared/search/RenderTag";

import Image from "next/image";
import { rigthBarTags } from "@/constants";
import Link from "next/link";

interface Props {
  _id: string;
  title: string;
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  answers: Array<object>;
  views: number;
  createdAt: Date;
  tags: {
    _id: number;
    name: string;
  }[];
}

const QuestionCard = ({
  _id,
  title,
  author,
  upvotes,
  answers,
  views,
  createdAt,
  tags,
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3.5">
          <Link href={`/tags/${_id}`}>
            <h3 className="h3-semibold text-dark400_light700 line-clamp-1">
              {title}
            </h3>
          </Link>
          <div className="flex flex-row gap-2">
            {rigthBarTags.map((item) => {
              return (
                <RenderTag key={item._id} _id={item._id} name={item.name} />
              );
            })}
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-3">
            <Link href={`/tags/${author}`} className="flex flex-row gap-3">
              <Image
                src={`/assets/icons/account.svg`}
                alt="new"
                width={20}
                height={20}
              />
              <p className="body-medium text-dark400_light700 flex items-center gap-1">
                {author}
              </p>
            </Link>
            <div className="flex flex-row gap-1">
              <p className="small-regular text-dark400_light700 line-clamp-1 max-sm:hidden">
                asked
              </p>
              <p className="small-regular text-dark400_light700 line-clamp-1 max-sm:hidden">
                {createdAt}
              </p>
              <p className="small-regular text-dark400_light700 line-clamp-1 max-sm:hidden">
                ago
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row items-center justify-between gap-2">
              <Image
                alt="new"
                width={15}
                height={15}
                src={`/assets/icons/like.svg`}
              />
              <p className="small-medium text-dark400_light800 flex items-center gap-1">
                {upvotes} Votes
              </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <Image
                width={15}
                height={15}
                src={`/assets/icons/message.svg`}
                alt="new"
              />
              <p className="small-medium text-dark400_light800 flex items-center gap-1">
                {answers} Answers
              </p>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <Image
                width={15}
                height={15}
                src={`/assets/icons/eye.svg`}
                alt="new"
              />
              <p className="small-medium text-dark400_light800 flex items-center gap-1">
                {views} Views
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
