// pages/question.js

import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "@/app/globals.css";

const QuestionSchema = Yup.object().shape({
  selectedOption: Yup.string().required("Please select an option"),
});

const Question = () => {
  const options = ["Option A", "Option B", "Option C", "Option D"];
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 text-black">
      <div className="w-3/6 bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between mb-4">
          <h1 className="text-lg ">Question</h1>
          <div className="text-sm font-semibold">{seconds} sec left</div>
        </div>
        <p className="text-lg font-bold">WHat is chocloate ?</p>
        <Formik
          initialValues={{
            selectedOption: "",
          }}
          validationSchema={QuestionSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-start">
              {options.map((option, index) => (
                <label key={index} className="inline-flex items-center mt-2">
                  <Field type="radio" name="selectedOption" value={option} />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
              <div className="mt-6 flex justify-between w-full">
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Prev
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Question;
