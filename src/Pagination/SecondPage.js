import React, { useState, useEffect } from "react";

const SecondPage = ({ onContinue, onGoBack }) => {
  const [selectedOption, setSelectedOption] = useState(() => {
    return parseInt(localStorage.getItem("2nd-page")) || null;
  });

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  useEffect(() => {
    localStorage.setItem("2nd-page", selectedOption);
  }, [selectedOption]);

  return (
    <div className="max-w-lg mx-auto flex flex-col h-full">
      <div className="flex items-center">
        <button className="pb-1" onClick={onGoBack}>
          {" "}
          {"<"}&nbsp;{" "}
        </button>
        <div className="relative w-full h-0.5 bg-gray-200 my-5">
          <div
            className="absolute top-[-1px] left-0  rounded-full border-2 border-green-500"
            style={{ width: "40%" }}
          ></div>
        </div>
      </div>
      <div className="text-center mb-8 ">
        <h2 className="text-2xl font-bold mb-2">
          Which are you most interested in?
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </p>
      </div>

      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl cursor-pointer ${
          selectedOption === 7 ? "border-orange-300" : ""
        }`}
        onClick={() => {
          handleOptionClick(7);
        }}
      >
        <img
          src="https://img.freepik.com/free-vector/statistics-chart_23-2147502422.jpg?w=740"
          alt="learning"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2">
          {" "}
          Learning specific skills to advance my career{" "}
        </p>
      </div>

      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl cursor-pointer ${
          selectedOption === 8 ? "border-orange-300" : ""
        }`}
        onClick={() => {
          handleOptionClick(8);
        }}
      >
        <img
          src="https://img.freepik.com/premium-vector/boy-with-magnifier-searching-illustration-concept_7084-598.jpg?w=740"
          alt="Exploring"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2">
          {" "}
          Exploring new topics I'm interested in{" "}
        </p>
      </div>

      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl cursor-pointer ${
          selectedOption === 9 ? "border-orange-300" : ""
        }`}
        onClick={() => handleOptionClick(9)}
      >
        <img
          src="https://img.freepik.com/free-vector/seamless-pattern-with-school-office-stationery_107791-9568.jpg?w=740"
          alt="math"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Refreshing my math foundations </p>
      </div>

      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl cursor-pointer ${
          selectedOption === 10 ? "border-orange-300" : ""
        }`}
        onClick={() => handleOptionClick(10)}
      >
        <img
          src="https://img.freepik.com/free-vector/dart-hitting-center-target-3d-icon-arrow-hitting-aim-bullseye-3d-vector-illustration-white-background-goal-success-achievement-marketing-strategy-concept_74855-25962.jpg?w=740"
          alt="Exercising"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Exercising my brain to stay sharp </p>
      </div>

      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl cursor-pointer ${
          selectedOption === 11 ? "border-orange-300" : ""
        }`}
        onClick={() => {
          handleOptionClick(11);
        }}
      >
        <img
          src="https://img.freepik.com/premium-vector/thinking-face-emoji_1319-430.jpg?w=740"
          alt="Something else"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Something else </p>
      </div>
      {/* button */}
      <div className="flex justify-center items-center mt-4 cursor-pointer">
        <button
          className={`border-2  py-2 px-12 text-white rounded-lg ${
            selectedOption !== null ? "bg-black" : "bg-gray-400"
          }`}
          onClick={selectedOption !== null ? onContinue : null}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
