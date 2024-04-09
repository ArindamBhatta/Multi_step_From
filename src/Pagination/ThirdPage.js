import React from "react";

const ThirdPage = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className=" max-w-lg relative w-full h-1 bg-gray-200 mt-12">
        <div
          className="absolute top-[-2px] left-0 h-2 rounded-full border-4 border-green-500"
          style={{ width: "60%" }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className=" flex max-w-5xl">
          <div className="max-h-80 w-6/12 flex items-center justify-center">
            <video
              src="https://brilliant.org/site_media/version-0/images/nux-animations/pulley-blob.mp4"
              alt="Pulley with weights"
              className="h-64 w-auto"
            />
          </div>
          {/* 2nd part */}
          <div className="max-h-80 w-6/12 flex  justify-center flex-col">
            <h1 className="text-3xl font-bold mb-4 text-left">
              You're in the right place
            </h1>
            <p className="text-left ">
              Brilliant gets you hands-on to help improve your professional
              skills and knowledge. You'll interact with concepts and solve fun
              problems in math, science, and computer science.
            </p>
          </div>
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
    </div>
  );
};

export default ThirdPage;
