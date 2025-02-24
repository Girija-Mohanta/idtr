import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "../css/Home.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import image1 from "../assets/hero-banner.635fe76260e89d940bfc.png";
import image2 from "../assets/030320230110142316idtr-main-gallery-25.png";
import image3 from "../assets/img_012.jpg";
import Cards from "../Components/Cards";
import driving from "../assets/driving.webp"
import ContactUs from "./ContactUs";
import Testimonial from "./Testimonial";
import leftTest from "../assets/testimonial_lbg.png"
import rightTest from "../assets/testimonial_rbg.png"
import WhyChooseUs from "./WhyChooseUs";
import Faq from "./Faq";
import Courses from "./Courses";
import { useTranslation } from "react-i18next";
function Home() {
    const { t } = useTranslation();
    return (
        <div className="home_container">
            <div className="home">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    effect="fade" 
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className="fade_swiper"
                >
                    <SwiperSlide>
                        <img src={image1} alt="Slide 1" className="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="Slide 2" className="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="Slide 3" className="slide_image" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="content_section">
                <div className="content_text" data-aos="fade-right">
                    <h2>{t("Our driving courses cover all categories of vehicles and learners.")}</h2>
                    <p>{t("We ensure that you have the required expertise before you hit the road.")}</p>
                    <p>{t("The institute trains you to be confident on the wheel and reach all your destinations safe and sound.")}</p>
                    <p className="highlight">{t("Choose the right mentor and stay safe for life.")}<br /> <strong>{t("IDTR, Karnal is your safest bet!")}</strong></p>
                </div>

                <div className="car_container" data-aos="fade-left">
                    <img src={driving} alt="Driving Training" className="content_image" />
                    <div className="smoke"></div>

                </div>
            </div>
            <div className="courses_main">
                <Courses />
            </div>

            <div className="annoucment_achivement" data-aos="slide-up">
                <div className="annoucment">
                    <h1>{t("ANNOUNCEMENT")}</h1>
                </div>
                <div className="marquee_container">
                    <div className="marquee">
                        <p>{t("New Operating Hours for Woodlands Counter Service")}</p>
                        <span> <FaRegCalendarAlt className="calendar-icon" /> 2022-09-02 </span>
                    </div>
                </div>
                <div className=" more_imformation">
                    <h1>{t("More Information")}</h1>
                </div>
            </div>

            <div className="announcements_section">
                {/* Announcements Card */}
                <div className="announcement_card" data-aos="zoom-out" >
                    <h2>{t("Announcements")}</h2>
                    <div className="scrolling_announcements">
                        <div className="announcement_item">
                            <p>{t("Upcoming Driving Test Schedule Updated")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-20</span>
                        </div>
                        <div className="announcement_item">
                            <p>{t("New Batch Enrollment Open Now")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-03-05</span>
                        </div>
                        <div className="announcement_item">
                            <p>{t("Holiday Notice: Office Closed on March 10")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-03-10</span>
                        </div>
                        <div className="announcement_item">
                            <p>{t("Upcoming Driving Test Schedule Updated")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-20</span>
                        </div>
                        <div className="announcement_item">
                            <p>{t("New Batch Enrollment Open Now")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-03-05</span>
                        </div>
                        <div className="announcement_item">
                            <p>{t("Holiday Notice: Office Closed on March 10")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-03-10</span>
                        </div>
                    </div>
                </div>
                {/* More Information Card */}
                <div className="info_achievements_card" data-aos="zoom-out" >
                    <h2>{t("More Information & Achievements")}</h2>
                    <div className="scrolling_list">
                        {/* More Information Section */}
                        <div className="list_item">
                            <p>{t("Eligibility criteria for new applicants updated")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-15</span>
                        </div>
                        <div className="list_item">
                            <p>{t("New syllabus released for advanced driving courses")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-18</span>
                        </div>
                        <div className="list_item">
                            <p>{t("Updated fee structure and payment options")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-22</span>
                        </div>

                        {/* Achievements Section */}
                        <div className="list_item">
                            <p>{t("Trained over 10,000+ students successfully")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-01-10</span>
                        </div>
                        <div className="list_item">
                            <p>{t("Received the Best Driving Institute Award 2023")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-01-25</span>
                        </div>
                        <div className="list_item">
                            <p>{t("95% pass rate in advanced driving test")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-05</span>
                        </div>
                        <div className="list_item">
                            <p>{t("95% pass rate in advanced driving test")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-05</span>
                        </div>
                        <div className="list_item">
                            <p>{t("95% pass rate in advanced driving test")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-05</span>
                        </div>
                        <div className="list_item">
                            <p>{t("95% pass rate in advanced driving test")}</p>
                            <span><FaRegCalendarAlt className="calendar-icon" /> 2024-02-05</span>
                        </div>
                
                    </div>
                </div>
            </div>

            <div className="contact_div">
                <ContactUs />
            </div>


            <div className="cards_main_container">
                <h1>{t("Simple Steps to Get Started!")}</h1>
                <div className="cards_container_new">
                    <Cards />
                </div>
            </div>


            <div className="Testimonial_main">
                <div className="right-test-image">
                    <img src={rightTest} alt="png" />
                </div>
                <div className="left-test-image">
                    <img src={leftTest} alt="png" />
                </div>
                <Testimonial />
            </div>

            <div className="whychooseuse_main">
                <WhyChooseUs />
            </div>

            <div className="faq_container">
                <Faq />
            </div>

        </div>
    );
}

export default Home;
