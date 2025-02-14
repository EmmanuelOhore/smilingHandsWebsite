import NavigationHeader from "../smallerCompoonets/navigationheader";
import Footer from "../smallerCompoonets/footer";
import imgone from "../../assets/placeholder.png";
import Aos from "aos";
import { useEffect } from "react";
import "../../styles/gallery.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const imgArray = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <>
      <div className="gallery_container">
        <NavigationHeader title={"Gallery"} navName={"Initiatives"} />
        <section className="gallery_content_container">
          {imgArray.map((el, index) => {
            return (
              <div
                data-aos="fade-down"
                key={index}
                className="gallery_img_container"
              >
                <img
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  src={imgone}
                  alt="Placeholder Image"
                />
              </div>
            );
          })}{" "}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
