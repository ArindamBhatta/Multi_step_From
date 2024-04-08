import React from "react";

const ForthPage = () => {
  return (
    <div className="flex  flex-col justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          What is your math comfort level?
        </h2>
        <p className="text-gray-700 mb-6">
          Choose the highest level you feel confident in — you can always adjust
          later.
        </p>
      </div>
      {/* 2nd part */}
      <div className="flex items-center justify-center rounded-lg gap-2">
        <div className="p-4 rounded-md border-2 flex flex-col items-center w-52 h-32">
          <p className="text-center w-full">5 × 1/2 = ?</p>
          <p className="text-gray-600 text-sm">Arithmetic</p>
          <p className="text-gray-600 text-xs">Introductory</p>
        </div>

        <div className="p-4 rounded-md border-2 flex flex-col items-center w-52 h-32">
          <p className="text-center w-full">3x + 5 = 4</p>
          <p className="text-gray-600 text-sm">Basic Algebra</p>
          <p className="text-gray-600 text-xs text-center">Foundational</p>
        </div>

        <div className="p-4 rounded-md border-2 flex flex-col items-center w-52 h-32">
          <pre className="text-center w-full">
            x = -b ± √(b<sup>2</sup> - 4ac)
            <hr /> 2a
          </pre>
          <p className="text-gray-600 text-sm">Intermediate Algebra</p>
          <p className="text-gray-600 text-xs">Intermediate</p>
        </div>

        <div className="p-4 rounded-md border-2 flex flex-col items-center w-52 h-32">
          <p className="text-center w-full">∫ x^2 dx = ?</p>
          <p className="text-gray-600 text-sm">Calculus</p>
          <p className="text-gray-600 text-xs">Advanced</p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <button className="border-2  py-2 px-12 text-white bg-black">
          {" "}
          Continue{" "}
        </button>
      </div>
    </div>
  );
};

export default ForthPage;
