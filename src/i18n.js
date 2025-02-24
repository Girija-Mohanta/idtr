import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      "Institute of Driving Training & Research": "Institute of Driving Training & Research",
      "A joint venture of Transport Department, Government of Haryana & Honda":
        "A joint venture of Transport Department, Government of Haryana & Honda",
      "Contact Us": "Contact Us",
      "Home": "Home",


    },
  },
  hi: {
    translation: {
      "Institute of Driving Training & Research": "ड्राइविंग प्रशिक्षण और अनुसंधान संस्थान",
      "A joint venture of Transport Department, Government of Haryana & Honda":
        "परिवहन विभाग, हरियाणा सरकार और होंडा का संयुक्त उद्यम",
      "Contact Us": "संपर्क करें",
      "Home": "घर",
      "About Us": "हमारे बारे में",
      "Courses": "पाठ्यक्रम",
      "Enroll": "नामांकन करें",
      "Our driving courses cover all categories of vehicles and learners.": "हमारे ड्राइविंग पाठ्यक्रम सभी प्रकार के वाहनों और शिक्षार्थियों को कवर करते हैं।",
      "We ensure that you have the required expertise before you hit the road.": "हम सुनिश्चित करते हैं कि सड़क पर उतरने से पहले आपके पास आवश्यक विशेषज्ञता हो।",
      "The institute trains you to be confident on the wheel and reach all your destinations safe and sound.":
        "संस्थान आपको स्टीयरिंग पर आत्मविश्वासी बनने और सभी गंतव्यों तक सुरक्षित पहुँचने के लिए प्रशिक्षित करता है।",
      "Choose the right mentor and stay safe for life.":
        "सही मार्गदर्शक चुनें और जीवन भर सुरक्षित रहें।",
      "IDTR, Karnal is your safest bet!":
        "IDTR, करनाल आपका सबसे सुरक्षित विकल्प है!",
      "Our Driving Courses":
        "हमारे ड्राइविंग पाठ्यक्रम",
      "Choose from a variety of courses designed to make you a skilled and confident driver.":
        "कुशल और आत्मविश्वासी चालक बनने के लिए विभिन्न पाठ्यक्रमों में से चुनें।",
      "Enroll Now":
        "अभी नामांकन करें",
      "ANNOUNCEMENT":
        "घोषणा",
      "New Operating Hours for Woodlands Counter Service":
        "वुडलैंड्स काउंटर सेवा के नए संचालन घंटे",
      "More Information":
        "अधिक जानकारी",
      "Announcements":
        "घोषणाएँ",
      "Upcoming Driving Test Schedule Updated":
        "आगामी ड्राइविंग परीक्षण अनुसूची अपडेट की गई",
      "New Batch Enrollment Open Now":
        "नई बैच का नामांकन अब खुला है",
      "Holiday Notice: Office Closed on March 10":
        "अवकाश सूचना: कार्यालय 10 मार्च को बंद रहेगा",
      "Upcoming Driving Test Schedule Updated":
        "आगामी ड्राइविंग परीक्षण अनुसूची अपडेट की गई है",
      "New Batch Enrollment Open Now":
        "नई बैच का नामांकन अब खुला है",
      "Holiday Notice: Office Closed on March 10":
        "अवकाश सूचना: कार्यालय 10 मार्च को बंद रहेगा",
      "More Information & Achievements":
        "अधिक जानकारी और उपलब्धियाँ",
      "Eligibility criteria for new applicants updated":
        "नए आवेदकों के लिए पात्रता मानदंड अपडेट किए गए हैं",
      "New syllabus released for advanced driving courses":
        "उन्नत ड्राइविंग पाठ्यक्रमों के लिए नया पाठ्यक्रम जारी किया गया है",
      "Updated fee structure and payment options":
        "अद्यतन शुल्क संरचना और भुगतान विकल्प",
      "Trained over 10,000+ students successfully":
        "10,000+ छात्रों को सफलतापूर्वक प्रशिक्षित किया गया",
      "Received the Best Driving Institute Award 2023":
        "सर्वश्रेष्ठ ड्राइविंग संस्थान पुरस्कार 2023 प्राप्त किया",
      "95% pass rate in advanced driving test":
        "उन्नत ड्राइविंग परीक्षण में 95% उत्तीर्ण दर",
        "We are here to assist you. Feel free to get in touch!":
"हम आपकी सहायता के लिए यहाँ हैं। बेझिझक संपर्क करें!",
"Your Name":
"आपका नाम",
"Your Email":
"आपका ईमेल",
"Your Phone":
"आपका फोन",
"Your Message":
"आपका संदेश",
"Send Message":
"संदेश भेजें",
"Get in Touch":
"संपर्क करें",
"Reach us via phone, email, or visit us at our office.":
"हमसे फोन, ईमेल के माध्यम से संपर्क करें या हमारे कार्यालय में पधारें।",
"Baldi Karnal, 132001, Haryana, India":
"बलड़ी, करनाल, 132001, हरियाणा, भारत",
"Simple Steps to Get Started!":
"शुरू करने के आसान चरण!",

    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
