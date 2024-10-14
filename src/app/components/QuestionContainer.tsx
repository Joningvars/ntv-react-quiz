import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const QuestionContainer = ({ children }: Props) => {
  return (
    <div className="bg-white min-w-[500px] rounded-md shadow-sm p-4 flex flex-col gap-2">
      {children}
    </div>
  );
};

export default QuestionContainer;
