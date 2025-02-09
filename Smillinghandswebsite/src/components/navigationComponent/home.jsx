import "../../styles/home.css";
import InitiativeBox from "../smallerCompoonets/intitativeBox";
import imgone from "../../assets/placeholder.png";
import imgtwo from "../../assets/place.png";
import Footer from "../smallerCompoonets/footer";
const Home = () => {
  return (
    <div className="home_container">
      {/* section home content */}
      <section className="home_content">
        <h1>We Are Touching Lives in Africa</h1>
        <div className="btn_container">
          <button className="btn btn_join-us">Join us</button>
          <button className="btn btn_donate">Donate Now</button>
        </div>
      </section>
      {/* section who we are  */}
      <section className="who_we_are">
        <h2>Who We Are</h2>
        <div className="who_we_are_content">
          <div className="who_we_are_text">
            <p>
              Mishpacha God’s Heritage Foundation is a registered
              Christian-based non-profit organization under the Corporate
              Affairs Commission (CAC). We are dedicated to uplifting the less
              privileged in our communities. Our foundation is committed to
              transforming lives by fostering a community rooted in compassion,
              faith, and service.
            </p>
            <p>
              Driven by the conviction that every individual has a purpose
              ordained by God, we strive to help people fulfill their divine
              potential. As a collective, we embrace our identity as a family
              united in our mission to make a meaningful difference, ensuring
              that no one is forgotten.
            </p>
            <button className="btn btn_learn-more">Learn More</button>
          </div>
          <div className="who_we_are_img">
            <img src={imgone} alt="Placeholder Image" />
          </div>
        </div>
      </section>

      {/* aside content */}
      <section className="aside_main_container">
        <div className="aside_content">
          <div className="aside_text">
            <h2>Lets Keeep Pusing</h2>
            <div className="aside_line">
              <p>
                We are called to touch lives, with the mission of eradicating
                poverty in Africa.
              </p>
              <p>
                We believe a single action can make a difference in the
                community and that collective actions can greatly impact the
                world.
              </p>
              <p>Let’s keep PUSHing!</p>
            </div>
          </div>
          <div className="aside_img">
            <img src={imgtwo} alt="placehilder" />
          </div>
        </div>
      </section>

      {/* mission section  */}
      <section className="our-mission">
        <h2>WHAT WE DO</h2>
        <div className="content-flex">
          <div className="content-item">
            <h3>Community Outreach</h3>
            <p>
              We organize programs that provide essential resources, education,
              and support to underprivileged individuals and families.
            </p>
          </div>
          <div className="content-item">
            <h3>Empowerment Programs</h3>
            <p>
              Our foundation focuses on empowering individuals to become
              self-sufficient, encouraging them to uplift others in their
              communities.
            </p>
          </div>
          <div className="content-item">
            <h3>Gospel Sharing</h3>
            <p>
              During our outreach efforts, we share the gospel and provide
              spiritual encouragement, helping individuals connect with their
              faith and purpose.
            </p>
          </div>
          {/* <div className="content-item">
            <h3>Awareness Campaigns</h3>
            <p>
              We engage in awareness campaigns to highlight the challenges faced
              by the less privileged and mobilize community support.
            </p>
          </div>
          <div className="content-item">
            <h3>Medical Outreach and Awareness</h3>
            <p>
              We conduct health awareness programs and medical outreach
              initiatives to provide essential healthcare services and
              information to underserved communities, ensuring access to vital
              health resources.
            </p>
          </div> */}
        </div>
        <button className="btn btn_READ">Read More</button>
      </section>

      {/* Helping hand section */}
      <section className="helping-hand">
        <div className="helping-hand_content">
          <div className="helping-hand_text">
            <h2>Provide a Helping Hand</h2>
            <p>
              We cant make it alone .We need your help , Your small help can
              bring a big change
            </p>
          </div>
          <button className="btn btn_helping_donate">Donate Now</button>
        </div>
      </section>

      {/*initiatives section  */}
      <section className="initiatives_container">
        <h2>Initiatives</h2>
        <div className="initiatives_content">
          <InitiativeBox img={imgone} header={"The Helping Hands Initiative"} />
          <InitiativeBox img={imgone} header={"The Smile of a Hundred"} />
          <InitiativeBox
            img={imgone}
            header={"Empowerment Through Education"}
          />
          <InitiativeBox img={imgone} header={"Medical Outreach/Awareness"} />
        </div>
      </section>

      {/* voolumteer section  */}
      <section className="volunteer_container">
        <div className="volunteer_content">
          <div className="volunteer_text">
            <div className="volunteer_line">
              <h2>We need you and your help</h2>
              <p>
                We are always looking for passionate individuals to join our
                cause. Whether you have time, skills, or resources to offer, we
                welcome your support.
              </p>
              <button className="btn btn_volunteer">Volunteer Now</button>
            </div>
          </div>
          <div className="volunteer_img">
            <img className="" src={imgtwo} alt="Placeholder Image" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
