import React from "react";

const FirstPage = ({ onContinue }) => {
  return (
    <div className="max-w-lg mx-auto mt-4 flex flex-col h-full">
      <div className="relative w-full h-1 bg-gray-200 my-5">
        <div
          className="absolute top-[-2px] left-0 h-2 rounded-full border-4 border-green-500"
          style={{ width: "20%" }}
        ></div>
      </div>
      <div className="text-center mb-8 max-w-lg">
        <h2 className="text-3xl font-bold mb-2">Which describes you best?</h2>
        <p className="text-gray-600 text-sm mt-2">
          This will help us personalize your experience.
        </p>
      </div>
      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/premium-photo/3d-animation-character-cartoon_113255-10674.jpg?w=740"
          alt="Student"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Student or soon to be enrolled </p>
      </div>
      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/free-photo/business-woman-with-brown-hair-black-glasses-3d-rendering_1142-40235.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Professional pursuing a career </p>
      </div>
      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/premium-photo/psd-person-with-excited-expression-pointing-tshirt-mockup_947814-55321.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Parent of a school-age child </p>
      </div>
      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/premium-photo/cartoon-boy-is-holding-huge-pencil-education-stock-images_593195-3759.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Lifelong learner </p>
      </div>
      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/premium-photo/teacher-illustration_942736-145.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Teacher </p>
      </div>
      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/free-vector/flat-thinking-concept_23-2148156507.jpg?w=740"
          alt="Professional"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2">Other</p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          className="border-2  py-2 px-12 text-white bg-black"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
