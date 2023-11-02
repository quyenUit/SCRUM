// import React, { useState } from "react";
// import "../assets/css/InformationInput.css";
// import "../assets/css/Popup.css";
// import "../assets/css/ProgressBar.css";
// import Button from "./Button";
// import ProgressBar2 from "./ProgressBar2";

// const InformationInput = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const showPopup = () => {
//     setIsPopupVisible(true);
//   };

//   const hidePopup = () => {
//     setIsPopupVisible(false);
//   };

//   return (
//     <div>
//       <div className="ProgressBar">
//         <ProgressBar2 />
//       </div>
//       <div className="InformationInput-bg">
//         <form className="w-full max-w-lg">
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="grid-first-name"
//               >
//                 First Name
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="grid-first-name"
//                 type="text"
//                 placeholder="Jane"
//               />
//               {/* <p className="text-red-500 text-xs italic">
//                 Please fill out this field.
//               </p> */}
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="grid-last-name"
//               >
//                 Last Name
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="grid-last-name"
//                 type="text"
//                 placeholder="Doe"
//               />
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="grid-first-name"
//               >
//                 Age
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                 id="grid-first-name"
//                 type="text"
//                 placeholder="20"
//               />
//               {/* <p className="text-red-500 text-xs italic">
//                 Please fill out this field.
//               </p> */}
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="grid-last-name"
//               >
//                 Gender
//               </label>
//               {/* <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="grid-last-name"
//                 type="text"
//                 placeholder="Bisexual"
//               /> */}
//               <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full px-3">
//               <label
//                 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                 htmlFor="grid-password"
//               >
//                 Phone Number
//               </label>
//               <input
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="grid-password"
//                 type="password"
//                 placeholder="0000000000"
//               />
//             </div>
//           </div>
//           {/* Specify the route you want to navigate to */}
//           <Button  onClick={showPopup}  title="Done" />
//         </form>
//       </div>

//       {isPopupVisible && (  
//         <div className="popup">
//           <div className="popup-content">
//             <p>Hoàn thành đăng ký!</p>
//             <button onClick={hidePopup}>Đóng</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InformationInput;


import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Button from "./Button";
import ProgressBar2 from "./ProgressBar2";
import '../assets/css/ProgressBar.css';
import '../assets/css/InformationInput.css'
import '../assets/css/Popup.css';  
import  axios  from "axios";

import { Link, useLocation } from 'react-router-dom';



const InformationInput = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState(''); 
    const age = "20";
    const gender = true; 
    const phoneNumber = "0000000000"; 
    const symptom_id = "65420791d5614a3c001dbf75"; 
    const location = useLocation();
    
  const searchParams = new URLSearchParams(location.search);
  const doctor_id = searchParams.get('doctorID');
  const date = searchParams.get('date');
  const time = searchParams.get('time');

    const requestData = {
        patient: {
            name: firstName + " " + lastName,
            phoneNumber: phoneNumber,
            age: age,
            gender: gender,
            symptom: symptom_id,
        },
        doctor: doctor_id,
        date: date,
        time: time,
    };

    // const showPopup = () => {
    //   setIsPopupVisible(true);
    // };
  
    const hidePopup = () => {
      setIsPopupVisible(false);
    };

    const handleDoneClick = async () => {
        await axios.post('https://1tn34qzc-3000.asse.devtunnels.ms/appointment',
            requestData,
            {headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => {
                console.log("data:", response.data);
            })
            .catch(error => {
                console.log(error);
        });
    };

  return (
    <div>
      <div  className="ProgressBar">
        <ProgressBar2 />
      </div>
      <div className="InformationInput-bg">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"         
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Age
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="20"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Gender
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="LGBT"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                placeholder="0000000000"
              />
            </div>
          </div>
        {/* Specify the route you want to navigate to */}
        <Button onClick={handleDoneClick()} className="" title="Done" />
      
        </form>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>Hoàn thành đăng ký!</p>
            <button onClick={hidePopup}>Đóng</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default InformationInput;
