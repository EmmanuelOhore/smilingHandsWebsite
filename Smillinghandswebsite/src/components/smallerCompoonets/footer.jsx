import imgone from "../../assets/placeholder.png";

const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <div className="footer_content">
          <div className="footer_text_container">
            <div className="footer_logo">
              <img src={imgone} alt="Placeholder Image" />
              <h1>LOGO</h1>
            </div>
            <div className="footer_text">
              <p>
                We are always looking for passionate individuals to join our
                cause. Whether you have time, skills, or resources to offer, we
                welcome your support.
              </p>
            </div>
            <div className="footer_links_container">
              <h3>Follow us:</h3>
              <div className="footer_links">
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
          {/* link s container */}
          <div className="footer_content_links_container">
            <div className="footer_content_section_Container">
              <div className="footer_content_section">
                <h3>What We Do</h3>
                <h3>Intiatives</h3>
              </div>
              <div className="footer_content_section">
                <h3>Who We Are</h3>
                <h3>Volunteer</h3>
              </div>
              <div className="footer_content_section">
                <h3>What We Do</h3>
                <h3>Intiatives</h3>
              </div>
              <div className="footer_content_section">
                <h3>Contacts</h3>
                <h3>About</h3>
              </div>
              <div className="footer_content_section">
                <h3>Push Team</h3>
                <h3>Gallery</h3>
              </div>
              <button className="btn btn_donate">Donate Now</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
