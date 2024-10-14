import React from "react";

type Props = {
  question: string;
};

const QuestionDisplay = (props: Props) => {
  return (
    <div>
      <h2 className="font-extrabold text-xl mb-4">{props.question}</h2>
    </div>
  );
};

export default QuestionDisplay;
