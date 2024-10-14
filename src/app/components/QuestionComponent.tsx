import React, { useState } from "react";
import AnswerComponent from "./AnswerComponent";
import QuestionContainer from "./QuestionContainer";
import QuestionDisplay from "./QuestionDisplay";
import { Question } from "@/types";

type Props = {
  setScore: Function;
  question: Question;
};

const QuestionComponent = ({ setScore, question }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <QuestionContainer>
        <QuestionDisplay question={question.question} />
        {question.answers.map((answer, index) => (
          <AnswerComponent
            key={index}
            answer={answer}
            setScore={setScore}
            setIsClicked={setIsClicked}
            disabled={isClicked}
          />
        ))}
      </QuestionContainer>
    </div>
  );
};

export default QuestionComponent;
