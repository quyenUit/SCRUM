import React from "react";
import DoctorCard from "./DoctorCard";
import { doctors } from "../constants";

const DoctorList = () => {
  return (
    <div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 ">
        {doctors.map((doctor) => (
                      <DoctorCard key={doctor.name} {...doctor} />
                  ))}
      
      </div>
      
    </div>
  );
};

export default DoctorList;
