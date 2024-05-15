import React, { useState, useEffect } from "react";
import Question from "@/components/Question";
import { FaRegClock } from "react-icons/fa";
import * as UserAssessmentActions from "@/app/store/userAssessment/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router"; // Import useRouter from Next.js

// const Clock = () => {
//   const [count, setCount] = useState(60);
//   console.log("lolo");
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((prevCount) => prevCount - 1);
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div className="absolute flex gap-2 items-center justify-center top-0 right-0 p-4 text-lg font-semibold">
//       <FaRegClock />
//       <p>{count}</p>
//     </div>
//   );
// };

const Practice = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize router
  const [currentQuestion, setCurrentQuestion] = useState({
    topic: "C_Programming",
    subTopic: "Expressions",
    difficulty: "2",
    question:
      "Which of the following are unary operators in C? 1.!  2.sizeof  3.~  4.&&",
    options: ["1,2", "1,3", "2,4", "1,2,3"],
    correctAnswer: "4",
    resource: "https://example.com/resource",
  });
  const [question, setQuestion] = useState(
    "Which of the following correctly shows the hierarchy of arithmetic operations in C?"
  );
  const [options, setOptions] = useState([
    "/ + * -",
    "* - / +",
    "+ - / *",
    "/ * + -",
  ]);
  const [flag, setFlag] = useState(0);
  const [score, setScore] = useState(0);
  const { index } = router.query;
  console.log("hihi");
  const getNextQuestionSuccess = useSelector(
    (state) => state?.userAssessment?.getNextQuestionSuccess
  );
  const userAssessmentId = useSelector(
    (state) => state?.userAssessment?.userAssessmentData?.data._id
  );
  const questionData = useSelector(
    (state) => state?.userAssessment?.nextQuestionData?.data
  );
  const [selectedOption, setSelectedOption] = useState(null);
  const [difficulty, setDifficulty] = useState(0);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    // Do whatever you want with the selected option here
  };
  const difficulthandler = () => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(selectedOption);
    let difficulth = difficulty;
    console.log(currentQuestion.correctAnswer);
    if (currentQuestion.correctAnswer == selectedOption + 1) {
      console.log("takakaka");
      difficulth = difficulth + 1;
      setDifficulty(difficulty + 1);
      setScore(score + 1);
    } else {
      difficulth = difficulth - 1;
      setDifficulty(difficulty - 1);
      if (score >= 1) {
        setScore(score - 1);
      }
    }
    dispatch(
      UserAssessmentActions.getNextQuestion({
        topic: currentQuestion.topic,
        subTopic: currentQuestion.subTopic,
        difficulty: difficulth,
        currentQuestionId: currentQuestion._id,
      })
    );
    setFlag(1);
  };

  useEffect(() => {
    console.log("first");

    if (index) {
      console.log("id:", index);
      dispatch(
        UserAssessmentActions.createUserAssessment({ assessment: index })
      );
    }
  }, [index]); // Add id to the dependency array

  useEffect(() => {
    if (getNextQuestionSuccess) {
      setFlag(0);
      console.log(questionData?.question);
      setQuestion(questionData?.question);
      setOptions(questionData?.options);
      dispatch(UserAssessmentActions.getNextQuestionInit());
      setCurrentQuestion(questionData);
      setSelectedOption(null);
    }
  }, [questionData]);

  const getNextQuestion = () => {
    difficulthandler();
  };

  useEffect(() => {
    console.log("kadlineilc");
  });
  console.log(question, options);

  return (
    <div className="relative text-gray-950 flex flex-col">
      {/* <Clock /> */}
      <div className="">
        <Question
          flag={flag}
          onOptionSelect={handleOptionSelect}
          question={question}
          options={options}
        />
      </div>
      <div className="bg-gray-200 py-4 flex justify-between items-center px-8">
        <div className="text-lg font-semibold">Score: {score}</div>
        <button
          onClick={getNextQuestion}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Practice;
