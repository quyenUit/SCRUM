// import React, { useState } from 'react'
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css"
// import DoctorList from './DoctorList'
// import { Link } from 'react-router-dom'
// import Button from './Button'
// import ProgressBar1 from './ProgressBar1'
// import '../assets/css/ProgressBar.css'
// import DoctorAPI from './DoctprAPI'


// const departName = 'None'

// const SetAppointment = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState();

//   const handleDateChange = (date) => {
//     setStartDate(date);
//     console.log(date)
//   };
//   const handleTimeChange = (time) => {
//     setSelectedTime(time.target.value);
//   };
//   return (
//     <div>
//         <div className="ProgressBar">
//           <ProgressBar1 />
//         </div>
//         <div className='text-xl font-semibold mt-4 text-blue-700 '>
//             {departName}
//         </div>
//         <div className='my-3  flex gap-4'>
//             <DatePicker selected={startDate} onChange={handleDateChange} className='border-2 border-blue-100 p-2 rounded-lg' />
//             <select
//             className="appearance-none border-2  border-blue-100 p-2 rounded-lg text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             id="grid-state"
//             value={selectedTime}
//             onChange={handleTimeChange}>
//                 <option value={"7:00"}>7:00</option>
//                 <option value={"8:00"}>8:00</option>
//                 <option value={"9:00"}>9:00</option>
//                 <option value={"10:00"}>10:00</option>
//                 <option value={"11:00"}>11:00</option>
//                 <option value={"13:00"}>13:00</option>
//                 <option value={"14:00"}>14:00</option>
//                 <option value={"15:00"}>15:00</option>
//           </select>
//         </div>
//         <DoctorAPI/>
//     <div className="text-center my-6">
//           <Link to="/InformationInput">
//             {" "}
//             <Button className="" title="Next" />
//           </Link>
//         </div>
//     </div>
//   )
// }

// export default SetAppointment

import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import ProgressBar1 from './ProgressBar1';
import '../assets/css/ProgressBar.css';
import axios from 'axios';
import moment from 'moment'; 
import DoctorCard from './DoctorCard';

const SetAppointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('7:00');
  const [doctors, setDoctors] = useState([]);
  const location = useLocation();

  // Lấy specialisationId từ URL
  const searchParams = new URLSearchParams(location.search);
  const specialisationId = searchParams.get('specialisation');
  const specialisationName = searchParams.get('specname')

  // Hàm này sẽ gọi API mỗi khi người dùng thay đổi ngày hoặc giờ
  const fetchDoctors = async (selectedDate, selectedTime) => {
    const formattedDate = moment(selectedDate).format('DD-MM-YY'); // Định dạng ngày giống API yêu cầu
    try {
      const response = await axios.get(`https://1tn34qzc-3000.asse.devtunnels.ms/doctors`, {
        params: {
          specialisation: specialisationId,
          date: formattedDate,
          time: selectedTime
        }
      });
      setDoctors(response.data.doctors); // Cập nhật danh sách bác sĩ
    } catch (error) {
      console.error('Error fetching doctors', error);
    }
  };

  // useEffect để theo dõi sự thay đổi của ngày và giờ
  useEffect(() => {
    if (specialisationId) {
      fetchDoctors(startDate, selectedTime);
    }
  }, [startDate, selectedTime, specialisationId]);

  // Cập nhật ngày khi người dùng thay đổi
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  // Cập nhật giờ khi người dùng thay đổi
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <div className="ProgressBar">
        <ProgressBar1 />
      </div>
      <div className='text-xl font-semibold mt-4 text-blue-700 '>
          {specialisationName}
      </div>
      <div className='my-3  flex gap-4'>
          <DatePicker selected={startDate} onChange={handleDateChange} className='border-2 border-blue-100 p-2 rounded-lg' />
          <select
          className="appearance-none border-2  border-blue-100 p-2 rounded-lg text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          value={selectedTime}
          onChange={handleTimeChange}>
              <option value="7:00">7:00</option>
              <option value="8:00">8:00</option>
              <option value="9:00">9:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              {/* Thêm các lựa chọn thời gian khác ở đây */}
          </select>
      </div>
      {/* Hiển thị danh sách bác sĩ ở đây */}
      {/* Bạn cần tạo một component DoctorList hoặc sử dụng DoctorCard tương tự */}
      <div>
      {doctors.map(doctor => (
        <DoctorCard
          key={doctor._id.specialisation}
          name={doctor.Name}
          doctorId={doctor._id}
          date={startDate}
          time={selectedTime}
          // Thêm các props khác nếu có
        />
      ))}
    </div>
      <div className="text-center my-6">
        <Link to="/InformationInput">
          <Button className="" title="Next" />
        </Link>
      </div>
    </div>
  )
}

export default SetAppointment;

