import React, { useEffect, useState } from "react";

const ForthPage = ({ onContinue, onGoBack }) => {
  const [selectOption, setSelectedOption] = useState(() => {
    return parseInt(localStorage.getItem("4th-page")) || null;
  });

  const handleOptionClick = (int) => {
    setSelectedOption(int);
  };

  useEffect(() => {
    localStorage.setItem("4th-page", selectOption);
  }, [selectOption]);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex items-center max-w-lg w-full mt-12">
        <button className="pb-1" onClick={onGoBack}>
          {"<"}&nbsp;
        </button>
        <div className="relative h-0.5 bg-gray-200 w-full">
          <div
            className="absolute top-[-1px] left-0  rounded-full border-2 border-green-500"
            style={{ width: "80%" }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            What is your math comfort level?
          </h2>
          <p className="text-gray-700 mb-6">
            Choose the highest level you feel confident in — you can always
            adjust later.
          </p>
        </div>

        {/* 2nd part */}
        <div className="flex items-center justify-center rounded-lg gap-2">
          <div
            onClick={() => handleOptionClick(1)}
            className={`p-4 rounded-md border-2 flex flex-col items-center w-52 h-32 cursor-pointer ${
              selectOption === 1 ? "border-orange-300" : ""
            } `}
          >
            <p className="text-center w-full">5 × 1/2 = ?</p>
            <p className="text-gray-600 text-sm">Arithmetic</p>
            <p className="text-gray-600 text-xs">Introductory</p>
          </div>
          {/*  */}
          <div
            onClick={() => handleOptionClick(2)}
            className={`p-4 rounded-md border-2 flex flex-col items-center w-52 h-32 cursor-pointer ${
              selectOption === 2 ? "border-orange-300" : ""
            }`}
          >
            <p className="text-center w-full">3x + 5 = 4</p>
            <p className="text-gray-600 text-sm">Basic Algebra</p>
            <p className="text-gray-600 text-xs text-center">Foundational</p>
          </div>
          {/*  */}
          <div
            onClick={() => handleOptionClick(3)}
            className={`p-4 rounded-md border-2 flex flex-col items-center w-52 h-32 cursor-pointer ${
              selectOption === 3 ? "border-orange-300" : ""
            }`}
          >
            <pre className="text-center w-full">
              x = -b ± √(b<sup>2</sup> - 4ac)
              <hr /> 2a
            </pre>
            <p className="text-gray-600 text-sm">Intermediate Algebra</p>
            <p className="text-gray-600 text-xs">Intermediate</p>
          </div>
          {/*  */}
          <div
            onClick={() => handleOptionClick(4)}
            className={`p-4 rounded-md border-2 flex flex-col items-center w-52 h-32 cursor-pointer ${
              selectOption === 4 ? "border-orange-300" : ""
            }`}
          >
            <p className="text-center w-full">∫ x^2 dx = ?</p>
            <p className="text-gray-600 text-sm">Calculus</p>
            <p className="text-gray-600 text-xs">Advanced</p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16 rounded-lg cursor-pointer">
          <button
            className={`border-2  py-2 px-12 text-white rounded-lg ${
              selectOption !== null ? "bg-black" : "bg-gray-400"
            }`}
            onClick={selectOption !== null ? onContinue : null}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForthPage;
