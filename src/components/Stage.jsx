import React from "react";

const Stage = ({ currentPage }) => {
  const stages = [
    {
      title: "Input symptoms",
      status: currentPage === "SymptomsInput" ? "active" : "",
    },
    {
      title: "Set appointment",
      status: currentPage === "SetAppointment" ? "active" : "",
    },
    {
      title: "Input information",
      status: currentPage === "InformationInput" ? "active" : "",
    },
  ];

  return (
    <div className="flex gap-4 text-sm">
      {stages.map((stage, index) => (
        <div
          key={index}
          className={`my-4 uppercase border-2 p-2 px-4 rounded-2xl font-medium ${
            stage.status === "active"
              ? "border-blue-200 bg-blue-500 text-white"
              : "border-gray-200 bg-gray-300 text-black"
          }`}
        >
          {stage.title}
        </div>
      ))}
    </div>
  );
};

export default Stage;
