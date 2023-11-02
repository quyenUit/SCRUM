import React from 'react'

import SymptomsInput from '../components/SymptomsInput'
import '../assets/css/HomePage.css'

const HomePage = () => {
  return (
    <div>
       <h1 className='bg-blue-500 text-2xl p-10 rounded-lg text-center font-bold uppercase text-white '>Doctor Appointment System</h1>
       
        <SymptomsInput currentPage="SymptomsInput" />
    </div>
  )
}

export default HomePage