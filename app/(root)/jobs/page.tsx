import JobsCard from "@/components/cards/JobsCard";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import React from "react";
import { customSort, fetchJobs } from "@/lib/utils";
import { SearchParamsProps } from "@/types";

const Jobs = async ({ searchParams }: SearchParamsProps) => {
  const allJobs = await fetchJobs({
    query: searchParams.q || "jobs",
    country: searchParams.filter,
  });

  const objJobs = Object.values(allJobs);
  console.log(objJobs);
  const sortedJobs = objJobs.sort(customSort);
  const isDataEmpty =
    !Array.isArray(sortedJobs) || sortedJobs.length < 1 || !sortedJobs;

  const uniqueJobCountries = new Set();

  sortedJobs.forEach((job: any) => {
    uniqueJobCountries.add(JSON.stringify(job.job_country));
  });

  const jobCountryArray = Array.from(uniqueJobCountries).map(
    (jsonString: any) => JSON.parse(jsonString)
  );

  const countryFilters = jobCountryArray.map((jobCountry) => ({
    name: jobCountry,
    value: jobCountry,
  }));

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
          filters={countryFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      {!isDataEmpty ? (
        <>
          {sortedJobs?.map((job: any) => (
            <div key="1" className="mt-12 flex flex-col gap-6">
              <JobsCard
                employer_logo={job.employer_logo}
                job_title={job.job_title}
                job_description={job.job_description}
                job_city={job.job_city}
                job_state={job.job_state}
                job_country={job.job_country}
                job_google_link={job.job_google_link}
                job_min_salary={job.job_min_salary}
                job_salary_currency={job.job_salary_currency}
                job_salary_period={job.job_salary_period}
              />
            </div>
          ))}
        </>
      ) : (
        <div>
          <h2>Ooops, no jobs found!</h2>
        </div>
      )}
    </section>
  );
};

export default Jobs;
