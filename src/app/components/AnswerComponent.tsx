"use client";
import { Answer } from "@/types";
import React, { useState } from "react";

type Props = {
  answer: Answer;
  setScore: Function;
  setIsClicked: Function;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const AnswerComponent = (props: Props) => {
  const [bgColor, setBgColor] = useState("bg-gray-100");

  const handleClick = () => {
    setBgColor(props.answer.isCorrect ? "bg-green-200" : "bg-red-200");
    props.setIsClicked(true);
    props.setScore((prev: number) =>
      props.answer.isCorrect ? (prev += 1) : prev
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`p-4 rounded-lg text-lg text-left ${bgColor}`}
      {...props}
    >
      {props.answer.answer}
    </button>
  );
};

export default AnswerComponent;
