import NavigationHeader from "../smallerCompoonets/navigationheader";
import ScrolltoTop from "../smallerCompoonets/ScrolltoTop";
import Footer from "../smallerCompoonets/footer";
import Aos from "aos";
import "../../styles/contactus.css";
import imgone from "../../assets/placeholder.png";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="contactus_conatner">
        <ScrolltoTop />
        <NavigationHeader title={"Contact Us"} navName={"Contact Us"} />
        {/* coatct us header */}
        <section className="contactus_content">
          <h2 className="!text-[#2a152f]">Let’s start a conversation</h2>
          <h4>
            Leave us a message and we’ll get back to you as soon as possible
          </h4>
        </section>
        {/* conactact us form  */}
        <section className="contactus_form_container">
          <form className="contactus_form">
            <div className="inputBox">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
              />
            </div>
            <button className="btn btn_submit !bg-[#2a152f] text-white">
              Submit
            </button>
          </form>
        </section>

        {/* constact us section poster  */}
        <section className="contactus_poster">
          <div className="contactus_poster_img_conatiner">
            <img data-aos="zoom-in" src={imgone} alt="Placeholder Image" />
          </div>

          <div className="contactus_poster_text">
            <div className="contactus_poster_text_content">
              <div className="contactus_poster_logo_container">
                <img src={imgone} alt="Placeholder Image" />
                <h1>LOGO</h1>
              </div>
              <div className="contactus_poster_textp_container">
                <p data-aos="fade-down">
                  <span className="bold !text-[#2a152f]">Phone: </span>
                  +2348135877412{" "}
                </p>
                <p data-aos="fade-up">
                  <span className="bold !text-[#2a152f]">Email: </span>
                  foundationofgodsheritage@gmail.com{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
