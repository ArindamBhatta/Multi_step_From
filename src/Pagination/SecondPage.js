import React from "react";

const SecondPage = ({ onContinue, onGoBack }) => {
  return (
    <div className="max-w-xl mx-auto mt-4 flex flex-col h-full">
      <div className="text-center mb-8 ">
        <h2 className="text-3xl font-bold mb-2">
          Which are you most interested in?
        </h2>
        <p className="text-gray-600 text-sm mt-2">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </p>
      </div>

      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
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

      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
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

      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/free-vector/seamless-pattern-with-school-office-stationery_107791-9568.jpg?w=740"
          alt="math"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Refreshing my math foundations </p>
      </div>

      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/free-vector/dart-hitting-center-target-3d-icon-arrow-hitting-aim-bullseye-3d-vector-illustration-white-background-goal-success-achievement-marketing-strategy-concept_74855-25962.jpg?w=740"
          alt="Exercising"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Exercising my brain to stay sharp </p>
      </div>

      <div className="flex items-center bg-white rounded-lg border-2 py-1 my-1 max-w-2xl">
        <img
          src="https://img.freepik.com/premium-vector/thinking-face-emoji_1319-430.jpg?w=740"
          alt="Something else"
          className=" mx-2 w-10"
        />
        <p className="text-center ml-2"> Something else </p>
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

export default SecondPage;
