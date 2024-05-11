import React from "react";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const LandingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gray-100  text-gray-950 min-h-screen flex flex-col justify-center items-center">
        {/* <div className="max-w-4xl w-full mx-auto p-8 bg-white rounded-lg shadow-md"> */}
        <h1 className="text-4xl font-bold mb-4 text-center">
          SKILLFORGE: Aptitude Training System using decision trees
        </h1>
        <p className="text-lg mb-8 text-center">
          Welcome to SKILLFORGE, your personalized learning experience for
          aptitude interview preparation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 py-8  bg-blue-500 text-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">
              Aptitude and Technical Preparation
            </h2>
            <p>
              Prepare effectively for campus placements with tailored content.
            </p>
          </div>
          <div className="p-4 py-8 bg-green-500 text-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">Personalized Learning</h2>
            <p>
              Identify and address individual weaknesses through adaptive
              testing and targeted exercises.
            </p>
          </div>
          <div className="p-4 py-8 bg-yellow-500 text-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">
              Latest Campus Drive Information
            </h2>
            <p>
              Stay updated with the latest campus drives, companies, positions,
              and deadlines.
            </p>
          </div>
          <div className="p-4 py-8 bg-purple-500 text-white rounded-lg shadow-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">
              Streamlined Application Process
            </h2>
            <p>Simplify the application process for various campus drives.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg">
            Sign up now and start preparing for your future!
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
            Sign Up
          </button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default LandingPage;
