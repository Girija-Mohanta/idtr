import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { FaEnvelope, FaPhone, FaChevronDown, FaTimes } from "react-icons/fa";
import registerlogo from "../assets/register.png";
import hondalogo from "../assets/hondalogo.png"
import { useTranslation } from "react-i18next";

function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const { t, i18n } = useTranslation();
    
      const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
      };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                if (window.scrollY < lastScrollY) {
                    setIsFixed(true);
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                setIsFixed(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    return (
        <div className='header_main'>
            <div className='top_header'>
                <li><FaEnvelope /> <span>idtrkarnal@gmail.com</span></li>
                <li><FaPhone /> <span>+91 9034999301</span></li>
                <select onChange={changeLanguage} defaultValue={i18n.language}>
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                </select>
            </div>

            <div className='second_header'>
                <div className='logo'>
                    <img src={registerlogo} alt='register logo' />
                    <div className='logo_title'>
                        <h1>{t("Institute of Driving Training & Research")}</h1>
                        <p className='para'>{t("A joint venture of Transport Department, Government of Haryana & Honda")}</p>
                    </div>
                </div>
                <div className='logo_honda'>
                    <img src={hondalogo} alt='logo ' />
                </div>
            </div>

            <div className={`third_header ${isFixed ? "fixed" : "sticky"} ${isVisible ? "visible" : "hidden"}`}>
                <ul>
                    <li>{t("Home")}</li>
                    <li className="dropdown">
                        {t("About Us")}
                        <FaChevronDown className="dropdown_icon" />
                        <ul className="dropdown_menu">
                            <li>{t("Our Mission")}</li>
                            <li>{t("Our Team")}</li>
                            <li>{t("Careers")}</li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        {t("Courses")}
                        <FaChevronDown className="dropdown_icon" />
                        <ul className="dropdown_menu">
                            <li>{t("Web Development")}</li>
                            <li>{t("Data Science")}</li>
                            <li>{t("Graphic Design")}</li>
                        </ul>
                    </li>
                    <li>{t("Enroll")}</li>
                    <li>{t("Contact Us")}</li>
                </ul>
                <div className="hamburger_main">
                    <div className="hamburger_menu" onClick={() => setIsOpen(!isOpen)}>
                        <span className={`bar ${isOpen ? "open1" : ""}`}></span>
                        <span className={`bar ${isOpen ? "open2" : ""}`}></span>
                        <span className={`bar ${isOpen ? "open3" : ""}`}></span>
                    </div>
                </div>

                <button className='login_btn'>{t("Login")}</button>
            </div>
            {/* for mobile page only */}
            <div className={`nav_menu ${isOpen ? "active" : ""}`}>
                <FaTimes className="close_icon" onClick={() => setIsOpen(false)} />
                <ul>
                    <li>Home</li>
                    <li
                        className={`dropdown_new ${openDropdown === 1 ? "click_open" : ""}`}
                        onClick={() => toggleDropdown(1)}
                        onMouseEnter={() => setOpenDropdown(1)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        About Us
                        <FaChevronDown className={`dropdown_icon ${openDropdown === 1 ? "rotate" : ""}`} />
                        <ul className={`dropdown_menu_new ${openDropdown === 1 ? "show" : ""}`}>
                            <li>Our Mission</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                        </ul>
                    </li>
                    <li
                        className={`dropdown_new ${openDropdown === 2 ? "click_open" : ""}`}
                        onClick={() => toggleDropdown(2)}
                        onMouseEnter={() => setOpenDropdown(2)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        Courses
                        <FaChevronDown className={`dropdown_icon ${openDropdown === 2 ? "rotate" : ""}`} />
                        <ul className={`dropdown_menu_new ${openDropdown === 2 ? "show" : ""}`}>
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Graphic Design</li>
                        </ul>
                    </li>

                    <li>Enroll</li>
                    <li>Contact Us</li>
                </ul>
            </div>

        </div>
    )
}

export default Header   