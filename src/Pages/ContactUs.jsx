import React from "react";
import "../css/ContactUs.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ContactUs() {
     const { t } = useTranslation();
    return (
        <div className="contact_page">
            <div className="contact_container">
                {/* Contact Form Section */}
                <div className="contact_form"  data-aos="flip-right">
                    <h2>{t("Contact Us")}</h2>
                    <p>{t("We are here to assist you. Feel free to get in touch!")}</p>

                    <form>
                        <div className="input_group">
                            <input type="text" placeholder="" required />
                            <label>{t("Your Name")}</label>
                        </div>
                        <div className="input_group">
                            <input type="email" placeholder="" required />
                            <label>{t("Your Email")}</label>
                        </div>
                        <div className="input_group">
                            <input type="tel" placeholder="" required />
                            <label>{t("Your Phone")}</label>
                        </div>
                        <div className="input_group">
                            <textarea placeholder="" required></textarea>
                            <label>{t("Your Message")}</label>
                        </div>
                        <button type="submit" className="submit_btn">{t("Send Message")}</button>
                    </form>
                </div>

                {/* Contact Info Section */}
                <div className="contact_info"  data-aos="flip-left">
                    <h2>{t("Get in Touch")}</h2>
                    <p>{t("Reach us via phone, email, or visit us at our office.")}</p>

                    <div className="info_item">
                        <FaPhone className="icon" />
                        <span>+91 9034999301</span>
                    </div>
                    <div className="info_item">
                        <FaEnvelope className="icon" />
                        <span>idtrkarnal@gmail.com</span>
                    </div>
                    <div className="info_item">
                        <FaMapMarkerAlt className="icon" />
                        <span>{t("Baldi Karnal,132001, Haryana, India")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
