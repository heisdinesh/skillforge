import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import * as AssessmentActions from "@/app/store/assessment/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const assessmentDetails = useSelector((state) => state.assessment);
  const createAssessment = (data) =>
    dispatch(AssessmentActions.createAssessment(data));
  console.log(assessmentDetails);
  const handleCreateAssessment = () => {
    createAssessment({
      title: "test 1",
    });
  };
  useEffect(() => {
    if (assessmentDetails.createSuccess) {
      router.push(`/practice/${assessmentDetails.assessmentData.data._id}`);
    }
  }, [assessmentDetails.createSuccess]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome to Your Dashboard
          </h2>
        </div>
        <div className="mt-10 flex flex-col space-y-6">
          <Link
            href="/preliminary-test"
            className="w-full flex justify-center py-3 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Take Preliminary Test
          </Link>
          <button
            type="button"
            onClick={handleCreateAssessment}
            className="w-full flex justify-center py-3 px-6 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Practice Aptitude
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
