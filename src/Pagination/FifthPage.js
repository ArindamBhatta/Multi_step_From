import React from "react";

const FifthPage = ({ onContinue, onGoBack }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex items-center max-w-lg w-full mt-12">
        <button className="pb-1" onClick={onGoBack}>
          {"<"}&nbsp;
        </button>
        <div className="relative h-0.5 bg-gray-200 w-full">
          <div
            className="absolute top-[-1px] left-0  rounded-full border-2 border-green-500"
            style={{ width: "100%" }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex-grow flex justify-center items-center">
          <div className="mx-auto flex flex-row items-center">
            <div className="w-1/2 flex justify-evenly">
              <img
                src="All_png\happy.jpg"
                alt="Visual element"
                className="w-auto h-72"
              />
            </div>
            <div className="w-1/2">
              <h1 className="text-3xl font-bold mb-4">You're on your way!</h1>
              <div className="inline-flex">
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
              </div>
              <p className="text-left">
                "Through its engaging and well-structured courses, Brilliant has
                taught me mathematical concepts that I previously struggled to
                understand. I now feel confident approaching both technical job
                interviews and real world problem solving situations."
              </p>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="flex justify-center">
            <button
              className="border-2 py-2 px-12 text-white bg-black  rounded-lg"
              onClick={onContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPage;
