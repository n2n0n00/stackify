import React from "react";
import { Button } from "../ui/button";
import { HomePageFilters } from "@/constants/filters";

const HomeFilters = () => {
  const active = "newest";
  return (
    <div className="flex flex-row flex-wrap gap-3">
      {HomePageFilters.map((item) => (
        <Button
          key={item.name}
          className={`body-medium rounded-lg p-6 capitalize shadow-none${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
