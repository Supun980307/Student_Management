import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Hero_Section = () => {
  const year = new Date().getFullYear();
  return (
    <section className="hero_section bg-info p-5 ">
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="hero_content">
            <p className="hero_subtitle">Empowering Education Since {year}</p>
            <h1>Welcome to Student Management Admin </h1>
            <p>
            Take control of your educational institution with our powerful Admin Panel
                for Student Management System
            </p>
            <Link to='/create'>{<motion.button
              whileTap={{ scale: 1.2 }}
              className="btn btn-primary buy_btn text-white"
            >
              CREATE STUDENT
            </motion.button>}</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero_Section
