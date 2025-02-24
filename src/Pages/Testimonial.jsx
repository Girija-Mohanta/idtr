import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import "../css/Testimonial.css";

import user1 from "../assets/1600w-2PE9qJLmPac.webp";
import user2 from "../assets/images.jpeg";
import user3 from "../assets/profile-pic.jpg";


function Testimonial() {
    const testimonials = [
        {
            image: user1,
            name: "John Doe",
            role: "Marketing Manager",
            text: "An amazing experience! The service exceeded my expectations, and I highly recommend it.",
        },
        {
            image: user2,
            name: "Sarah Williams",
            role: "Software Engineer",
            text: "Fantastic service and a highly professional team. I'm truly impressed by their work!",
        },
        {
            image: user3,
            name: "Michael Brown",
            role: "Entrepreneur",
            text: "Best decision I made! The quality of service is excellent, and I love the professionalism.",
        },
    ];

    return (
        <div className="testimonial_section">
            <h2 className="testimonial_title">What Our Clients Say</h2>
           
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFlip]}
                effect="flip"
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="testimonial_swiper"
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial_card">
                            <div className="testimonial_front">
                                <div className="testimonial_image_container">
                                    <img src={item.image} alt={item.name} className="testimonial_image" />
                                </div>
                                <h4 className="testimonial_name">{item.name}</h4>
                                <p className="testimonial_role">{item.role}</p>
                            </div>
                            <div className="testimonial_back">
                                <p className="testimonial_text">"{item.text}"</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonial;
