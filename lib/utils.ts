import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - createdAt.getTime();
  // Convert time difference to seconds
  const seconds = Math.floor(timeDifference / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  // Calculate elapsed time in different units
  let elapsedTime;
  for (const [unit, secondsPerUnit] of Object.entries(intervals)) {
    elapsedTime = Math.floor(seconds / secondsPerUnit);
    if (elapsedTime >= 1) {
      return `${elapsedTime} ${unit}${elapsedTime !== 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};

export const convertNumberWithExtension = (number: number): string => {
  if (number >= 1000000) {
    const millionValue = (number / 1000000).toFixed(1);
    return `${millionValue}M`;
  } else if (number >= 1000) {
    const thousandValue = (number / 1000).toFixed(1);
    return `${thousandValue}K`;
  } else {
    return number.toString();
  }
};
