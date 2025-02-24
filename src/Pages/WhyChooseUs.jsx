import React from "react";
import { FaChalkboardTeacher, FaCarSide, FaShieldAlt, FaTools } from "react-icons/fa";
import "../css/WhyChooseUs.css";

function WhyChooseUs() {
    const features = [
        {
            icon: <FaChalkboardTeacher />,
            title: "Expert Instructors",
            description: "Our certified trainers provide hands-on experience to ensure safe and skilled driving practices.",
        },
        {
            icon: <FaCarSide />,
            title: "State-of-the-Art Vehicles",
            description: "We offer a modern fleet of vehicles equipped with the latest safety and training features.",
        },
        {
            icon: <FaShieldAlt />,
            title: "Safety First Approach",
            description: "Safety is our top priority. Our training focuses on defensive driving and accident prevention.",
        },
        {
            icon: <FaTools />,
            title: "Advanced Driving Simulators",
            description: "Practice in our high-tech simulators before hitting the road for real-world driving experience.",
        },
    ];

    return (
        <section className="why_choose_us">
            <div className="container">
                <h2 className="section_title">Why Choose Us?</h2>
                <p className="section_subtitle">
                    **Institute of Driving Training & Research** – A joint venture of the **Transport Department, Government of Haryana & Honda.**
                    We are committed to **safe, responsible, and expert** driving training.
                </p>
                <div className="features_grid">
                    {features.map((item, index) => (
                        <div className={`feature_card ${index % 2 === 0 ? "dark" : "light"}`} key={index} data-aos="zoom-in"
                        data-aos-delay={index * 200}>
                            <div className="icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
