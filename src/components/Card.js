import { CDN_LINK } from "../utils/constant";

// Card Component -- Started
const Card = (props) => {
  const { resList } = props;
  const {
    id,
    name,
    cloudinaryImageId,
    locality,
    costForTwo,
    cuisines,
    avgRating,
  } = resList?.info;
  console.log(resList.info.id);
  return (
    <div className="card-container">
      <img src={CDN_LINK + cloudinaryImageId} alt="logo" />
      <div className="text-container">
        {/* <h3>{id}</h3> */}
        <p>{name}</p>
        <p className="cuisine">{cuisines}</p>
        <p>{locality}</p>
        <p>
          <b>{costForTwo}</b>
        </p>
        <p>{avgRating} ⭐ Rating</p>
      </div>
      <div className="offer">
        <a href="#">Grab Offer UpTo 50%</a>
      </div>
    </div>
  );
};
// Card Component -- Ended

export default Card;
