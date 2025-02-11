import Footer from "../smallerCompoonets/footer";
import imgone from "../../assets/placeholder.png";
import imgtwo from "../../assets/place.png";
import NavigationHeader from "../smallerCompoonets/navigationheader";
import "../../styles/about.css";
const About = () => {
  return (
    <>
      <div className="about_container">
        <NavigationHeader title={"About us"} navName={"About"} />

        {/* about contaunt section */}
        <section className="about_content">
          <h2>Who We Are</h2>
          <div className="vision_mission_container">
            {/* vision container */}
            <div className="vision_container container_box">
              <div className="img_container ">
                <img src={imgone} alt="Placeholder Image" />
              </div>
              <div className="text_container">
                <h2>Our Vision</h2>
                <p>
                  Our vision is to change and transform the lives of the less
                  privileged.
                </p>
              </div>
            </div>
            {/* mission conainter */}
            <div className="mission_container container_box">
              <div className="img_container">
                <img src={imgone} alt="Placeholder Image" />
              </div>
              <div className="text_container">
                <h2>Our Mission</h2>
                <p>
                  This is a Christian based foundation which was built by the
                  leading of the Holy Spirit and by people who are bent on
                  helping and changing the lives of the less privileged around
                  us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  posterimg*/}
        <section className="posterimg"></section>
        {/* voluteerposter image */}
        <section className="volunteer_postercontainer">
          <div className="volunteer_poster_text_container">
            <div className="volunteer_poster_text">
              <h2>Take the First step Today</h2>
              <p>
                Joining PUSH Foundation can also be a great way to meet
                like-minded individuals who share your passion for serving
                others and making the world a better place.
              </p>
              <button className="btn btn_volunteer">Volunteer</button>
            </div>
          </div>
          <div className="volunteer_poster">
            <img src={imgtwo} alt="Placeholder Image" />
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default About;
