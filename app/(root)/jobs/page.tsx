"use client";

import JobsCard from "@/components/cards/JobsCard";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { QuestionFilters } from "@/constants/filters";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Jobs = () => {
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "http://ip-api.com/json/?fields=status,message,country,countryCode,region,city,query"
    );

    console.log(res.data);
    setIP(res.data.query);
  };

  useEffect(() => {
    // passing getData method to the lifecycle method
    getData();
  }, []);

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
        <JobsCard ip={ip} />
      </div>
    </section>
  );
};

export default Jobs;
