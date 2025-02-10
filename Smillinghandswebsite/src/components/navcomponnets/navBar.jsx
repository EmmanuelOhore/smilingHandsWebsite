import "../../styles/navBar.css";
import imgone from "../../assets/placeholder.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <section className="logo_container">
        <div className="img-container">
          <img src={imgone} alt="Placeholder Image" />
        </div>
        <h1>LOGO</h1>
      </section>
      <section className="nav_links_conatiner">
        <ul className="nav_links">
          <Link to="/">
            <li>
              <p href="#">Home</p>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <p href="#">About</p>
            </li>
          </Link>
          <Link to="/Volunteer">
            <li>
              <p href="#">Volunteer</p>
            </li>
          </Link>
          <Link to="/Intiatives">
            <li>
              <p href="#">Iniatives</p>
            </li>
          </Link>

          <Link to="/Gallery">
            <li>
              <p href="#">Gallery</p>
            </li>
          </Link>
          <Link to="/Contactus">
            <li>
              <p href="#"> Contact us</p>
            </li>
          </Link>
        </ul>
      </section>
      <section className="nav_button">
        <button>Donate</button>
        <div className="search_container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
      </section>
      {/* hamburger meanu */}
      <i className="fa-solid fa-bars bars"></i>
    </nav>
  );
};

export default NavBar;
