import { Question } from "@/types";
import React from "react";

type Props = {
  score: number;
  questions: Question[];
  setScore: Function;
};

const Score = (props: Props) => {
  return (
    <div className="text-3xl">
      Score {props.score} / {props.questions.length}
    </div>
  );
};

export default Score;
