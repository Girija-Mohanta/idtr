import React from "react";
import { FaInfoCircle, FaWpforms, FaMoneyCheckAlt, FaCheckCircle } from "react-icons/fa"; // Import Icons
import "../css/Cards.css";

function Cards() {
  const cardData = [
    {
      icon: <FaInfoCircle />,
      title: "Get the right information",
      description:
        "Read detailed information in the syllabus section. Check your eligibility, available courses, and required documents.",
    },
    {
      icon: <FaWpforms />,
      title: "Fill out the form",
      description:
        "Select your vehicle category, course type, and eligibility. Register online/offline by filling up the personal information form.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Fee payment",
      description:
        "Pay fees online or offline. Upon payment, receive your joining receipt and onboarding details. Start right away!",
    },
    {
      icon: <FaCheckCircle />,
      title: "Verification",
      description:
        "Submit/upload the required verification documents. After submission, proceed with the fee payment to complete your application.",
    },
  ];

  return (
    <div className="cards_container">
      {cardData.map((card, index) => (
        <div className="card" key={index} data-aos="zoom-in"
          data-aos-delay={index * 200}>
          <div className="card_icon">{card.icon}</div>
          <h3 className="card_title">{card.title}</h3>
          <p className="card_description">{card.description}</p>
          <div className="card_hover_effect"></div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
