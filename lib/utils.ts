import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;

  if (timeDifference < minute) {
    const secondsAgo = Math.floor(timeDifference / 1000);
    return `${secondsAgo} ${secondsAgo === 1 ? "sec" : "secs"} ago`;
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} ${minutesAgo === 1 ? "min" : "mins"} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} ${hoursAgo === 1 ? "hour" : "hours"} ago`;
  } else if (timeDifference < week) {
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} ${daysAgo === 1 ? "day" : "days"} ago`;
  } else {
    // If it's been more than a week, return the full date
    return createdAt.toDateString();
  }
};

export const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};

export const getMonthYearJoined = (dateObject: Date): string => {
  // Check if the input is a valid Date object
  if (!(dateObject instanceof Date)) {
    return "Invalid Date";
  }

  // Define an array of month names
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month and year from the Date object
  const month: string = monthNames[dateObject.getMonth()];
  const year: number = dateObject.getFullYear();

  // Create a string in the "Month Year" format
  const formattedDate: string = `${month} ${year}`;

  return formattedDate;
};
