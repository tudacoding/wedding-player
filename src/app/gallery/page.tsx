import Header from "../components/Header";
import ImageSlider from "../components/ImageSlider";
import GalleryShow from "../modules/gallery";
const GalleryPage = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <GalleryShow />
    </div>
  );
};

export default GalleryPage;
