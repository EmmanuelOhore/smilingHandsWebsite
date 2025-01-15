import NavigationHeader from "../smallerCompoonets/navigationheader";
import Footer from "../smallerCompoonets/footer";
import "../../styles/contactus.css";

const ContactUs = () => {
  return (
    <>
      <div className="contactus_conatner">
        <NavigationHeader title={"Contac tUs"} navName={"Contact Us"} />
        {/* coatct us header */}
        <section className="contactus_content">
          <h2>Let’s start a conversation</h2>
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
            <button className="btn btn_submit">Submit</button>
          </form>
        </section>

        {/* constact us section poster  */}
        <section className="contactus_poster">
          <div className="contactus_poster_img_conatiner">
            <img
              src="https://via.placeholder.com/500x400"
              alt="Placeholder Image"
            />
          </div>

          <div className="contactus_poster_text">
            <div className="contactus_poster_text_content">
              <div className="contactus_poster_logo_container">
                <img
                  src="https://via.placeholder.com/100x50"
                  alt="Placeholder Image"
                />
                <h1>LOGO</h1>
              </div>
              <div className="contactus_poster_textp_container">
                <p>
                  <span className="bold">Phone: </span>+2348135877412{" "}
                </p>
                <p>
                  <span className="bold">Email: </span>
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
