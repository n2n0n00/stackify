import React from "react";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import Filter from "@/components/shared/search/Filter";
import { QuestionFilters } from "@/constants/filters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResults from "@/components/shared/NoResults";
import { getSavedQuestions } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";

export default async function Home() {
  const { userId } = auth();

  if (!userId) return null;

  const result = await getSavedQuestions({
    clerkId: userId,
  });

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="./ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Saved Questions
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
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((item) => (
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
            description="Add a question first to kickstart your collection of inspired questions... 💡"
            link="/ask-question"
            linkTitle="Add a Question"
          />
        )}
      </div>
    </>
  );
}
