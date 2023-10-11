import LocalSearchBar from "@/components/shared/search/LocalSearchBar";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import React from "react";
import Filter from "@/components/shared/search/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResults from "@/components/shared/NoResults";

const questions = [
  {
    _id: "2",
    title: "Another Sample Post",
    author: {
      _id: "author2",
      name: "Jane Smith",
      picture: "jane-smith.jpg",
    },
    upvotes: 35,
    answers: [],
    views: 567,
    createdAt: new Date(2023, 3, 20),
    tags: [
      {
        _id: "1",
        name: "typescript",
      },
      {
        _id: "4",
        name: "nodejs",
      },
      {
        _id: "5",
        name: "web-development",
      },
    ],
  },
  {
    _id: "1",
    title: "Sample Post Title",
    author: {
      _id: "author1",
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    upvotes: 42,
    answers: [],
    views: 1234,
    createdAt: new Date(),
    tags: [
      {
        _id: "1",
        name: "typescript",
      },
      {
        _id: "2",
        name: "react",
      },
      {
        _id: "3",
        name: "javascript",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="./ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
      </div>
      <div className="mt-6 flex flex-row gap-4 max-md:hidden">
        <HomeFilters />
      </div>
      <div className="mt-6 hidden max-md:flex">
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((item) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              author={item.author}
              upvotes={item.upvotes}
              answers={item.answers}
              views={item.views}
              createdAt={item.createdAt}
              tags={item.tags}
            />
          ))
        ) : (
          <NoResults
            title="There no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
