import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "./DoctorCard";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const DoctorAPI = () => {
  const [doctors, setDoctors] = useState([]);
  const query = useQuery();
  const specialisationId = query.get('specialisation');
  const [selectedDate, setSelectedDate] = useState('02-11-23'); // Ví dụ, có thể đặt thông qua input
  const [selectedTime, setSelectedTime] = useState('8:00'); // Ví dụ, có thể đặt thông qua input

  useEffect(() => {
    if (specialisationId) {
      const fetchDoctors = async () => {
        try {
          const response = await axios.get('https://1tn34qzc-3000.asse.devtunnels.ms/doctors', {
              params: {
                  specialisation: specialisationId,
                  date: selectedDate,
                  time: selectedTime
              }
          });
          setDoctors(response.data.doctors);
        } catch (error) {
          console.error('Error fetching doctors', error);
        }
      };
      
      fetchDoctors();
    }
  }, [specialisationId, selectedDate, selectedTime]);

  return (
    <div>
      {doctors.map(doctor => (
        <DoctorCard
          key={doctor._id.specialisation}
          name={doctor.Name}
          // Thêm các props khác nếu có
        />
      ))}
    </div>
  );
};

export default DoctorAPI;
