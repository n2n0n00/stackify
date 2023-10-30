import JobsCard from "@/components/cards/JobsCard";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { QuestionFilters } from "@/constants/filters";
import React from "react";

const Jobs = () => {
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900">Find Jobs</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <JobsCard />
      </div>
    </section>
  );
};

export default Jobs;
