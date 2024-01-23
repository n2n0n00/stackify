/* eslint-disable camelcase */
"use client";
import { formatAndDivideNumber } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface JobProps {
  employer_logo?: string;
  job_title?: string;
  job_description?: string;
  job_city?: string;
  job_state?: string;
  job_country?: string;
  job_google_link: string;
  job_min_salary?: number;
  job_salary_currency?: string;
  job_employment_type?: string;
}

const JobsCard = ({
  employer_logo,
  job_title,
  job_description,
  job_city,
  job_state,
  job_country,
  job_google_link,
  job_min_salary,
  job_salary_currency,
  job_employment_type,
}: JobProps) => {
  const [flag, setFlag] = useState("");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${job_country}?fields=flags`)
      .then((response) => response.json())
      .then((data) => {
        // Check the format of the flag data in the response
        if (data && data.flags && typeof data.flags.svg === "string") {
          // If it's an object with a "flags" object containing a "png" property, use that string as the URL
          setFlag(data.flags.svg);
        } else {
          console.error("Invalid flag data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching country flag:", error);
      });
  }, [job_country]);

  return (
    <section className="background-light900_dark200 light-border shadow-light100_darknone flex w-[90vw] flex-col items-start gap-6 rounded-lg border p-6 sm:w-[75vw] sm:flex-row sm:p-8 lg:w-full">
      <div className="flex w-full justify-end sm:hidden">
        <div className="background-light800_dark400 flex items-center justify-end gap-2 rounded-2xl px-3 py-1.5">
          {flag && (
            <Image src={flag} width={24} height={24} alt="profile image" />
          )}
          <p className="body-medium text-dark400_light700">
            {job_city} {job_state} {job_country}
          </p>
        </div>
      </div>
      <div className="background-light800_dark400 relative flex h-16 w-16 items-center justify-center gap-6 rounded-xl">
        {employer_logo ? (
          <Image
            src={employer_logo}
            width={60}
            height={60}
            alt="profile image"
          />
        ) : (
          <Image
            src="/assets/images/site-logo.svg"
            width={40}
            height={40}
            alt="profile image"
          />
        )}
      </div>
      <div className="w-full">
        <div className="flex-between flex-wrap gap-2">
          <p className="base-semibold text-dark200_light900">{job_title}</p>
          <div className="hidden sm:flex">
            <div className="background-light800_dark400 flex items-center justify-end gap-2 rounded-2xl px-3 py-1.5">
              {flag && (
                <Image src={flag} width={24} height={24} alt="profile image" />
              )}
              <p className="body-medium text-dark400_light700">
                {job_city} {job_state} {job_country}
              </p>
            </div>
          </div>
        </div>
        <p className="body-regular text-dark500_light700  mt-2 line-clamp-2">
          {job_description}
        </p>
        <div className="flex-between mt-8 flex-wrap gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/clock-2.svg"
                width={20}
                height={20}
                alt="profile image"
              />
              <div>
                <p className="body-medium text-light-500">
                  {job_employment_type || "Not Disclosed"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/currency-dollar-circle.svg"
                width={20}
                height={20}
                alt="profile image"
              />
              <div>
                {job_min_salary ? (
                  <p className="body-medium text-light-500">
                    {formatAndDivideNumber(job_min_salary)}{" "}
                    {job_salary_currency}
                  </p>
                ) : (
                  <p className="body-medium text-light-500">Not Disclosed</p>
                )}
              </div>
            </div>
          </div>
          <Link
            target="_blank"
            className="flex flex-row items-center justify-center gap-2"
            href={job_google_link}
          >
            <p className="body-semibold primary-text-gradient">View Job</p>
            <Image
              src="/assets/icons/arrow-up-right.svg"
              width={20}
              height={20}
              alt="profile image"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobsCard;
