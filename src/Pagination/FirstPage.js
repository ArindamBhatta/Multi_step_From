import React, { useState } from "react";

const FirstPage = ({ onContinue, onGoBack }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="max-w-lg mx-auto  flex flex-col h-full">
      <div className="relative w-full h-0.5 bg-gray-200 my-5">
        <div
          className="absolute top-[-1px] left-0  rounded-full  border-2 border-green-500"
          style={{ width: "20%" }}
        ></div>
      </div>
      <div className="text-center mb-8 max-w-lg">
        <h2 className="text-3xl font-bold mb-2">Which describes you best?</h2>
        <p className="text-gray-600 text-sm mt-2">
          This will help us personalize your experience.
        </p>
      </div>
      {/* 2nd part */}
      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl ${
          selectedOption === 1 ? "border-gray-500" : ""
        }`}
        onClick={() => handleOptionClick(1)}
      >
        <img
          src="https://img.freepik.com/premium-photo/3d-animation-character-cartoon_113255-10674.jpg?w=740"
          alt="Student"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Student or soon to be enrolled </p>
      </div>
      {/* profesonal */}
      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl ${
          selectedOption === 2 ? "border-gray-500" : ""
        }`}
        onClick={() => handleOptionClick(2)}
      >
        <img
          src="https://img.freepik.com/free-photo/business-woman-with-brown-hair-black-glasses-3d-rendering_1142-40235.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Professional pursuing a career </p>
      </div>

      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl 
        ${selectedOption === 3 ? "border-gray-500" : ""} `}
        onClick={() => handleOptionClick(3)}
      >
        <img
          src="https://img.freepik.com/premium-photo/psd-person-with-excited-expression-pointing-tshirt-mockup_947814-55321.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Parent of a school-age child </p>
      </div>
      {/*  */}
      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl ${
          selectedOption === 4 ? "border-gray-500" : ""
        }`}
        onClick={() => handleOptionClick(4)}
      >
        <img
          src="https://img.freepik.com/premium-photo/cartoon-boy-is-holding-huge-pencil-education-stock-images_593195-3759.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Lifelong learner </p>
      </div>
      {/*  */}
      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl ${
          selectedOption === 5 ? "border-gray-500" : ""
        } `}
        onClick={() => handleOptionClick(5)}
      >
        <img
          src="https://img.freepik.com/premium-photo/teacher-illustration_942736-145.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Teacher </p>
      </div>

      <div
        className={`flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl ${
          selectedOption === 6 ? "border-gray-500" : ""
        }`}
        onClick={() => handleOptionClick(6)}
      >
        <img
          src="https://img.freepik.com/free-vector/flat-thinking-concept_23-2148156507.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2">Other</p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          className={`border-2  py-2 px-12 text-white rounded-lg ${
            selectedOption !== null ? "bg-black" : "bg-gray-200"
          }`}
          onClick={selectedOption !== null ? onContinue : null}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
