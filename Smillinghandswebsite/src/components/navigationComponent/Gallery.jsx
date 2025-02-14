import NavigationHeader from "../smallerCompoonets/navigationheader";
import Footer from "../smallerCompoonets/footer";
import imgone from "../../assets/placeholder.png";
import "../../styles/gallery.css";
const Gallery = () => {
  const imgArray = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <>
      <div className="gallery_container">
        <NavigationHeader title={"Gallery"} navName={"Initiatives"} />
        <section className="gallery_content_container">
          {imgArray.map((el, index) => {
            return (
              <div key={index} className="gallery_img_container">
                <img src={imgone} alt="Placeholder Image" />
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
