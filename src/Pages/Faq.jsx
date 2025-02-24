import React, { useState } from "react";
import "../css/Faq.css";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
        question: "What is the Institute of Driving Training & Research?",
        answer: "The Institute of Driving Training & Research is a joint venture between the Transport Department, Government of Haryana, and Honda. It offers specialized training programs to promote road safety and skilled driving.",
    },
    {
        question: "Who can enroll in the driving courses?",
        answer: "Our courses are designed for all individuals above 18 years who want to learn driving or enhance their driving skills. We offer both beginner and advanced-level programs.",
    },
    {
        question: "What types of driving courses do you offer?",
        answer: "We offer basic, advanced, and commercial driving courses, including two-wheeler, four-wheeler, and heavy vehicle training.",
    },
    {
        question: "Are the trainers certified professionals?",
        answer: "Yes, all our trainers are certified and have extensive experience in road safety and defensive driving techniques.",
    },
    {
        question: "Do you provide a driving license after the training?",
        answer: "While we provide the necessary training and certification, the final driving license is issued by the Regional Transport Office (RTO) after passing the required tests.",
    },
];

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq_section">
            <h2 className="faq_title">Frequently Asked Questions</h2>
            <div className="faq_container">
                {faqData.map((item, index) => (
                    <div 
                        className={`faq_item ${activeIndex === index ? "active" : ""}`} 
                        key={index} 
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq_question">
                            <h3>{item.question}</h3>
                            <FaChevronDown className={`faq_icon ${activeIndex === index ? "rotate" : ""}`} />
                        </div>
                        <div className="faq_answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
