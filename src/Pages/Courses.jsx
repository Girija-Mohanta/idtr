import React from "react";
import { FaCar, FaRoad, FaUserShield, FaMotorcycle } from "react-icons/fa";
import "../css/Courses.css";
import { useTranslation } from "react-i18next";


const courses = [
    {
        title: "Beginner Driving Course",
        description: "Learn the basics of driving, road rules, and safe driving techniques.",
        icon: <FaCar />,
    },
    {
        title: "Advanced Driving Course",
        description: "Enhance your driving skills with advanced maneuvers and safety techniques.",
        icon: <FaRoad />,
    },
    {
        title: "Defensive Driving",
        description: "Master defensive driving techniques to stay safe in any road condition.",
        icon: <FaUserShield />,
    },
    {
        title: "Two-Wheeler Training",
        description: "Specialized training for motorcycle and scooter riders.",
        icon: <FaMotorcycle />,
    },
];

function Courses() {
    const { t } = useTranslation();
    return (
        <div className="courses_section">
            <h2 className="courses_title">{t("Our Driving Courses")}</h2>
            <p className="courses_subtitle">
               {t("Choose from a variety of courses designed to make you a skilled and confident driver.")}
            </p>

            <div className="courses_container">
                {courses.map((course, index) => (
                    <div key={index} className="course_card" data-aos="zoom-in"
                        data-aos-delay={index * 200}>
                        <div className="course_icon">{course.icon}</div>
                        <h3 className="course_name">{course.title}</h3>
                        <p className="course_description">{course.description}</p>
                        <button className="enroll_button">{t("Enroll Now")}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
