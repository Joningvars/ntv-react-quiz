"use client";
import Score from "./components/Score";
import QuestionComponent from "./components/QuestionComponent";
import { useState } from "react";
import { QUESTIONS } from "./questions";

export default function Home() {
  const [score, setScore] = useState(0);
  return (
    <div className="flex flex-col items-center m-10 gap-12 ">
      <h1 className="text-7xl font-extrabold">Quiz App</h1>
      <Score setScore={setScore} score={score} questions={QUESTIONS} />
      {QUESTIONS.map((question) => (
        <QuestionComponent setScore={setScore} question={question} />
      ))}
    </div>
  );
}
