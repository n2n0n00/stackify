import React from "react";
import RenderTag from "../shared/search/RenderTag";

import Link from "next/link";
import Metric from "../shared/Metric";
import { formatNumber, getTimestamp } from "@/lib/utils";

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
    _id: string;
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
        <div className="flex flex-col items-start justify-between ">
          <div>
            <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
              {getTimestamp(createdAt)}
            </span>
            <Link href={`/question/${_id}`}>
              <h3 className="sm:h3-semibold  base-semibold text-dark200_light900 line-clamp-1 flex-1">
                {title}
              </h3>
            </Link>
          </div>
          {/* If signed in add an edit button */}

          <div className="mt-3.5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
            ))}
          </div>
        </div>

        <div className="flex-between mt-6 w-full flex-wrap gap-3">
          <Metric
            imgUrl="/assets/icons/avatar.svg"
            alt="User"
            value={author.name}
            title={` - asked ${getTimestamp(createdAt)}`}
            href={`/profile/${author._id}`}
            isAuthor
            textStyles="body-medium text-dark400_light700"
          />
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={formatNumber(upvotes)}
            title="Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="Answers"
            value={formatNumber(answers.length)}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatNumber(views)}
            title="Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
