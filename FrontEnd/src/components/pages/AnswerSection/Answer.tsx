"use client";
import React from "react";
import sass from "../AnswerSection/Answer.module.scss";
import { useGetAnswerDataQuery } from "@/redux/api/data";

const Answer = () => {
  const { data } = useGetAnswerDataQuery();
  return (
    <div id={sass.answer1}>
      {data ? (
        <>
          <div className="container">
            <h1>Ответы на частые вопросы</h1>
            <div className={sass.answer}>
              {data?.map((el, index) => (
                <details key={index}>
                  <summary>{el.questions}</summary>
                  <p>{el.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Answer;
