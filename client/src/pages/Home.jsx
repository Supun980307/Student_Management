import React from 'react'
import NavBar from "../components/NavBar/NavBar"
import Hero_Section from '../components/Hero/Hero_Section'
import StudentList from '../components/Student_List/StudentList'

const Home = () => {
  return (
    <>
    <div>
        <NavBar/>
    </div>

    <div>
      <Hero_Section/>
    </div>

    <div className = "studentlist mt-5">
      <StudentList/>
    </div>
    </>
    
  )
}

export default Home
