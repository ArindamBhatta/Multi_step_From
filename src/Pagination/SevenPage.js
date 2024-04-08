import React from "react";

const SevenPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Learning paths based on your answers
        </h2>
        <p className="text-gray-600 text-sm mt-4">
          Choose one to get started. You can switch anytime.
        </p>
      </div>

      <div className="flex relative flex-col h-40">
        <div className="flex relative h-full items-center justify-center ">
          <div className="flex items-center justify-center w-96 relative ">
            <div className="flex flex-col ">
              <span className=" absloute ml-32 text-center text-sm bg-yellow-500 rounded-3xl">
                MOST POPULAR
              </span>
              <h2 className="text-xl font-bold mb-2 text-center ">
                Foundational Math{" "}
                <span className="text-gray-600 "> Build </span>
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                Your foundational skills in algebra, geometry, and probability.
              </p>
            </div>
            <div className="h-auto w-52 flex ml-2">
              <img
                src="https://images.squarespace-cdn.com/content/v1/59b07ebde5dd5b4656794977/1625588887212-BIHE6Z8I3YOQNBXVS349/Math_Foundations_WIP_v01_6.gif?format=750w"
                alt=" Mathematical Thinking"
                className="w-24 h-auto mr-2"
              />
            </div>
          </div>
          <div className=" flex items-center justify-center w-96">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-2 text-center ">
                Mathematical Thinking
              </h2>
              <p className="text-gray-600 mb-4 text-center">
                Build your foundational skills in algebra, geometry, and
                probability
              </p>
            </div>
            <div className="h-auto w-52 flex ml-2">
              <img
                src="https://images.squarespace-cdn.com/content/v1/59b07ebde5dd5b4656794977/1625588887212-BIHE6Z8I3YOQNBXVS349/Math_Foundations_WIP_v01_6.gif?format=750w"
                alt=" Mathematical Thinking"
                className="w-24 h-auto mr-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevenPage;
