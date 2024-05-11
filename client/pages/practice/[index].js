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
  const [currentQuestionId, setCurrentQuestionId] = useState();
  const [question, setQuestion] = useState(
    "Which of the following correctly shows the hierarchy of arithmetic operations in C?"
  );
  const [options, setOptions] = useState([
    "/ + * -",
    "* - / +",
    "+ - / *",
    "/ * + -",
  ]);
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
      console.log(questionData?.question);
      setQuestion(questionData?.question);
      setOptions(questionData?.options);
      dispatch(UserAssessmentActions.getNextQuestionInit());
    }
  }, [questionData]);

  const getNextQuestion = () => {
    dispatch(
      UserAssessmentActions.getNextQuestion({
        topic: "C_Programming",
        subTopic: "Expressions",
        difficulty: "3",
        currentQuestionId: "662bcec9e294a5d9a373975e",
      })
    );
  };

  useEffect(() => {
    console.log("kadlineilc");
  });
  console.log(question, options);

  return (
    <div className="relative text-gray-950 flex flex-col">
      {/* <Clock /> */}
      <div className="">
        <Question question={question} options={options} />
      </div>
      <div className="bg-gray-200 py-4 flex justify-between items-center px-8">
        <div className="text-lg font-semibold">Score: 0</div>
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
