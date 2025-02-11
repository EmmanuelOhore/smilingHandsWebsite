import NavigationHeader from "../smallerCompoonets/navigationheader";
import imgone from "../../assets/placeholder.png";

import Footer from "../smallerCompoonets/footer";
import "../../styles/volunteer.css";
const Volunteer = () => {
  const volunteerReason = [
    {
      title: "Create Lasting Impact",
      explanation:
        ": Your involvement directly contributes to meaningful change. By volunteering, you empower individuals and families, helping them overcome challenges and achieve their potential.",
    },
    {
      title: "Experience Personal Gro",
      explanation:
        "Engaging in volunteer work fosters personal fulfillment and growth. Many of our volunteers report increased happiness, enhanced self-esteem, and a profound sense of purpose as they witness the positive effects of their contributions.",
    },
    {
      title: "Cultivate Meaningful Connections",
      explanation:
        "Join a vibrant community of compassionate individuals who share your commitment to service. Volunteering provides a unique platform to forge lasting friendships and network with like-minded people who are passionate about making a difference.",
    },
    {
      title: "Develop Valuable Skills",
      explanation:
        "Whether you seek to enhance existing skills or acquire new ones, our diverse volunteer opportunities offer hands-on experience in areas such as community outreach, education support, and health initiatives—skills that are invaluable in both personal and professional contexts.",
    },
    {
      title: "Align with a Noble Mission",
      explanation:
        "Become part of an organization that stands for social justice, compassion, and empowerment. Our foundation is dedicated to uplifting marginalized communities, allowing you to contribute to a cause that resonates deeply with your values.",
    },
    {
      title: "Flexible Engagement",
      explanation:
        "We understand the importance of balance in your life. Our volunteer roles are designed with flexibility in mind, enabling you to make a meaningful contribution while accommodating your personal schedule.",
    },
    {
      title: "Recognition and Appreciation",
      explanation:
        "Your efforts will not go unnoticed. We celebrate our volunteers through recognition programs and appreciation events, ensuring that you feel valued for the vital role you play in our mission.",
    },
  ];
  return (
    <>
      <div className="volunteerNav_container">
        <NavigationHeader title={"Volunteer"} navName={"Volunteer"} />
        <section className="volunteer_foundation_section">
          <div className="volunteer_foundation_container">
            <div className="volunteer_foundation_text">
              <div className="foundation_header_text">
                <h2>Join Us in Making a Difference!</h2>
                <p>
                  At Mishpacha God’s Heritage Foundation, our volunteers are the
                  heart of our mission. By joining our team, you can help uplift
                  the less privileged in our communities and make a lasting
                  impact.
                </p>
              </div>
              <div className="foundation_text_content">
                <h2>Why Volunteer with Mishpacha God’s Heritage Foundation?</h2>
                <ul className="foundation_reason_container">
                  {volunteerReason.map((el, index) => {
                    return (
                      <li key={index} className="foundation_reason">
                        <p>
                          <span className="reason_point">{el.title}:</span>
                          {el.explanation}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="vounteer_founfation_img">
              <img
                className="volunteer_img"
                src={imgone}
                alt="Placeholder Image"
              />
            </div>
          </div>
        </section>
        {/* due note section */}
        <section className="volunteer_due_note_section">
          <div className="due_note_container">
            <i className="fa-solid fa-people-group"></i>
            <p>
              Note: Due to the current global situation, we prioritize the
              health and safety of our volunteers and the communities we serve.
              We closely follow local health guidelines and take necessary
              precautions during all our activities.
            </p>
          </div>
        </section>

        {/* join_funfation section */}
        <section className="join_volunteer_container">
          <div className="join_volunteer_content">
            <div className="join_volunteer_text">
              <div className="join_volunteer_line">
                <h2>BECOME A VOLUNTEER</h2>
                <p>
                  To get started, simply complete our online application form,
                  indicating your preferred areas of interest and your
                  availability. Once we receive your application, our dedicated
                  team will reach out to discuss potential volunteer roles that
                  align with your interests and provide you with detailed
                  information about the onboarding process. We look forward to
                  welcoming you to our community of passionate volunteers!
                </p>
                <button className="btn btn_volunteer">Volunteer Now</button>
              </div>
            </div>
            <div className="join_volunteer_img">
              <img
                className="join_volunteer_img"
                src={imgone}
                alt="Placeholder Image"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Volunteer;
