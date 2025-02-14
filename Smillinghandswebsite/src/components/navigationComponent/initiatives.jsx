import NavigationHeader from "../smallerCompoonets/navigationheader";
import Footer from "../smallerCompoonets/footer";
import imgone from "../../assets/placeholder.png";
import Aos from "aos";
import { useState, useEffect } from "react";
import "../../styles/initiative.css";

const Initiatives = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [current, setcurrent] = useState(null);
  const handleDropdown = (index) => {
    setcurrent((prev) => (prev === index ? null : index));
  };
  const intiativeData = [
    {
      img: imgone,
      title: "The Helping Hands Initiative",
      description:
        "This initiative focuses on supporting individuals with disabilities, providing them with essential resources, advocacy, and community integration. We aim to empower these individuals by enhancing their skills and promoting independence through tailored programs and activities that foster social interaction and personal growth",
    },
    {
      img: imgone,
      title: "The Smile of a Hundred",
      delay: "200",
      description:
        "Dedicated to the homeless in our community, this initiative seeks to provide immediate relief and support. We organize outreach programs that offer food, clothing, and shelter assistance, while also connecting individuals to long-term resources for rehabilitation and reintegration into society.",
    },
    {
      img: imgone,
      title: "Empowerment Through Education",
      delay: "400",
      description:
        "This initiative aims to assist children in preparing for critical examinations such as WAEC and JAMB. We provide educational resources, tutoring, and mentorship programs to ensure that these children have the support they need to succeed academically and pursue their future goals.",
    },
    {
      img: imgone,
      title: "Medical Outreach/Awareness",
      delay: "600",
      description:
        "Our medical outreach initiative focuses on promoting health awareness and providing essential medical services to underserved communities. We conduct health screenings and educational workshops to inform individuals about preventive healthcare practices and available medical resources.",
    },
  ];
  return (
    <>
      <div className="initiatives_section_container">
        <NavigationHeader title={"Initiatives"} navName={"Initiatives"} />
        <section className="initiatives_content_container">
          {/* box content styling */}
          {intiativeData.map((el, index) => {
            return (
              <div
                data-aos="fade-left"
                data-aos-delay={el.delay}
                key={index}
                className="intiatives_boxContent"
              >
                <div className="intiatives_boxContent_img_container">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="800"
                    src={el.img}
                    alt="Placeholder Image"
                  />
                </div>
                <div className="dropdown">
                  <div className="dropdown_content_header">
                    <h2>{el.title}</h2>
                    <i
                      onClick={() => handleDropdown(index)}
                      className={
                        current === index
                          ? "fa-solid  arrow fa-arrow-down"
                          : "fa-solid arrow fa-arrow-right"
                      }
                    ></i>
                  </div>

                  <div
                    className={`dropdown_content ${
                      current === index ? "visible" : "hidden"
                    }`}
                  >
                    <p>{el.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Initiatives;
