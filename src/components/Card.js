import { CDN_LINK } from "../utils/constant";

// Card Component -- Started
const Card = (props) => {
  const { resData } = props;
  const { id, name, cloudinaryImageId, locality, costForTwo, cuisines } =
    resData?.info;

  // const { rating } = resData?.info?.externalRating?.aggregateRating?.rating;
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={CDN_LINK + cloudinaryImageId}
          height="182px"
          width="100%"
          alt=""
        />
      </div>
      <div className="text-container">
        <h3>
          {cuisines.join(", ")}
          <p>{costForTwo}</p>
        </h3>
        <p>{name}</p>
        <div className="pre-book">
          <div className="percent">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"
              alt=""
            />
            <div>Flat 20% off on pre-booking</div>
          </div>
          <div className="offers">+3 more</div>
        </div>
        <div className="rating">{}</div>
        <div className="offer">Up to 10% off with bank offers</div>
      </div>
    </div>
  );
};
// Card Component -- Ended

// Image Component -- Started
const ImageSection = () => {
  return (
    <div
      className="image-section"
      style={{ height: "100%", width: "100%", margin: "100px 0" }}
    >
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
        style={{ height: "100%", width: "100%" }}
        alt="image-section"
      />
    </div>
  );
};
// Image Component -- Ended

export default Card;
