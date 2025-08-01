import { IMAGE_SECTION } from "../utils/constant";

// Image Component -- Started
const ImageSection = () => {
  return (
    <div
      className="image-section"
      style={{ height: "100%", width: "100%", margin: "100px 0" }}
    >
      <img
        src={IMAGE_SECTION}
        style={{ height: "100%", width: "100%" }}
        alt="image-section"
      />
    </div>
  );
};
// Image Component -- Ended

// exporting the ImageSection to the outside world!
export default ImageSection;
