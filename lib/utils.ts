import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
import { BADGE_CRITERIA } from "@/constants";
import { BadgeCounts } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    const seconds = Math.floor(timeDifference / 1000);
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(timeDifference / year);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
};

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return num.toString();
  }
};

export const getJoinedDate = (date: Date): string => {
  // Extract the month and year from the Date object
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Create the joined date string (e.g., "September 2023")
  const joinedDate = `${month} ${year}`;

  return joinedDate;
};

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

interface BadgeParam {
  criteria: {
    type: keyof typeof BADGE_CRITERIA;
    count: number;
  }[];
}

export const assignBadges = (params: BadgeParam) => {
  const badgeCounts: BadgeCounts = {
    GOLD: 0,
    SILVER: 0,
    BRONZE: 0,
  };

  const { criteria } = params;

  criteria.forEach((item) => {
    const { type, count } = item;
    const badgeLevels: any = BADGE_CRITERIA[type];

    Object.keys(badgeLevels).forEach((level: any) => {
      if (count >= badgeLevels[level]) {
        badgeCounts[level as keyof BadgeCounts] += 1;
      }
    });
  });

  return badgeCounts;
};

interface FilterProps {
  country?: string | null;
  query?: string | null;
  page?: number | null;
  pageSize?: number | null;
}

export async function fetchJobs(filters: FilterProps) {
  const { country, query } = filters;

  try {
    const res = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${query}&country=${country}`,

      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "802020dfd4mshb622905659e0b6fp1c7f49jsn89c3fafb491a",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );

    const jsonData = await res.json();
    const data = jsonData.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCountry() {
  try {
    const response = await fetch("http://ip-api.com/json/?fields=countryCode");
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    const userCountry = data.countryCode;
    return userCountry;
  } catch (error) {
    console.error("Error fetching User Country:", error);
    throw error; // Rethrow the error for the caller to handle if needed
  }
}

export function customSort(a: any, b: any) {
  const userCountry = getCountry();

  if (a.job_country === userCountry && b.job_country === userCountry) {
    // If both jobs have the same userCountry, maintain the order.
    return 0;
  } else if (a.job_country === userCountry) {
    // If only job 'a' has the same userCountry, place it first
    return -1;
  } else if (b.job_country === userCountry) {
    // If only job 'b' has the same userCountry, place it first
    return 1;
  } else {
    // If neither job has the same userCountry, maintain the order.
    return 0;
  }
}

export async function fetchCountryData() {
  const apiUrl = await "https://restcountries.com/v3.1/all"; // API endpoint to fetch all countries

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Extract country names and codes from the response data
      const countryData = data.map((country: any) => ({
        name: country.name.common,
        value: country.cca2,
      }));
      return countryData;
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
      return [];
    });
}
