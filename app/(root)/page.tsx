import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import HomeFilter from "@/components/filters/HomeFilter";
import QuestionCard from "@/components/cards/QuestionCard";
import logger from "@/lib/logger";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "data:image/jpeg;base64,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",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "data:image/jpeg;base64,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",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
