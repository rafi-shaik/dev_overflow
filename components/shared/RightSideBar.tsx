import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";

const hotQuestions = [
  {
    _id: 1,
    title: "How do I use express server as the default in Next.js ?",
  },
  {
    _id: 2,
    title: "How do I use express server as the default in Next.js ?",
  },
  {
    _id: 3,
    title: "How do I use express server as the default in Next.js ?",
  },
  {
    _id: 4,
    title: "How do I use express server as the default in Next.js ?",
  },
  {
    _id: 5,
    title: "How do I use express server as the default in Next.js ?",
  },
];

const popularTags = [
  { _id: '1', name: "javascript", totalQuestions: 100 },
  { _id: '2', name: "react", totalQuestions: 18 },
  { _id: '3', name: "next.js", totalQuestions: 25 },
  { _id: '4', name: "svelte", totalQuestions: 9 },
  { _id: '5', name: "dsa", totalQuestions: 14 },
];

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="right-icon"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
