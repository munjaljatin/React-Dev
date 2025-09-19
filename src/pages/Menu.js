import Shimmer from "../components/Shimmer";
import { CDN_LINK } from "../utils/constant";
import { useParams } from "react-router";
import { useRestaurantMenu } from "../utils/Hooks/useRestaurantMenu";

const Menu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);
  console.log(resInfo);

  const {
    name,
    id,
    cuisines,
    cloudinaryImageId,
    city,
    areaName,
    avgRating,
    costForTwoMessage,
  } = resInfo;

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="restaurant">
        <h2>{name}</h2>
      </div>
      <div className="res-info-container">
        <div className="restro-image">
          <img src={CDN_LINK + cloudinaryImageId} alt="" />
        </div>
        <div className="rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12.0002" cy="12" r="10.8" fill="#1BA672"></circle>
            <path
              d="M12.0977 15.438C12.0373 15.4024 11.9623 15.4024 11.9019 15.438L8.77957 17.2761C8.32159 17.5457 7.76507 17.1308 7.89275 16.6149L8.73063 13.2294C8.74846 13.1573 8.72339 13.0814 8.66614 13.0341L5.94605 10.7883C5.5298 10.4447 5.74364 9.76902 6.28183 9.72744L9.88118 9.44931C9.95264 9.44379 10.0152 9.39914 10.0435 9.33333L11.4489 6.07662C11.6574 5.59359 12.3423 5.59359 12.5507 6.07662L13.9561 9.33333C13.9845 9.39914 14.047 9.44379 14.1184 9.44931L17.7178 9.72744C18.256 9.76902 18.4698 10.4447 18.0536 10.7883L15.3335 13.0341C15.2762 13.0814 15.2512 13.1573 15.269 13.2294L16.1069 16.6149C16.2345 17.1308 15.678 17.5457 15.22 17.2761L12.0977 15.438Z"
              fill="white"
            ></path>
          </svg>
          <p>
            {avgRating} . {costForTwoMessage}
          </p>
        </div>
        <div className="cuisines">
          <p>{cuisines.join(", ")}</p>
        </div>
        <div className="location">
          <p>
            <b>Location:</b> {areaName}, {city}
          </p>
        </div>
        <div className="status">
          <p>Open Now</p>
        </div>
        <hr />
        <div className="info">
          <div className="book-table reach">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                stroke="#FF5200"
                strokeWidth="2"
                fill="none"
              ></rect>
              <line
                x1="3"
                y1="10"
                x2="21"
                y2="10"
                stroke="#FF5200"
                strokeWidth="2"
              ></line>
              <line
                x1="7"
                y1="2"
                x2="7"
                y2="6"
                stroke="#FF5200"
                strokeWidth="2"
              ></line>
              <line
                x1="17"
                y1="2"
                x2="17"
                y2="6"
                stroke="#FF5200"
                strokeWidth="2"
              ></line>
              <line
                x1="7"
                y1="14"
                x2="11"
                y2="14"
                stroke="#FF5200"
                strokeWidth="2"
              ></line>
              <line
                x1="13"
                y1="14"
                x2="17"
                y2="14"
                stroke="#FF5200"
                strokeWidth="2"
              ></line>
              <line
                x1="7"
                y1="18"
                x2="11"
                y2="18"
                stroke="#FF5200"
                strokeWidth="2"
              ></line>
              <line
                x1="13"
                y1="18"
                x2="17"
                y2="18"
                stroke="#FF5200"
                strokeWidth="2"
              ></line>
            </svg>
            <p>Book Table</p>
          </div>
          <div className="tile"></div>
          <div className="call reach">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/seo%20web/callOrange.png"
              width="24"
            />
            <p>Call</p>
          </div>
          <div className="tile"></div>
          <div className="direction reach">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_2121_11726)">
                <path
                  d="M13.4114 3.28669C14.7155 2.61622 15.6468 2.13871 16.3304 1.89549C17.0525 1.63858 17.2523 1.73449 17.3308 1.80942C17.4094 1.88434 17.5147 2.07938 17.2924 2.81285C17.0819 3.50721 16.6492 4.4601 16.0414 5.79464L12.5768 13.4024C11.9452 14.7892 11.4923 15.7812 11.0928 16.4209C10.6684 17.1007 10.4463 17.1476 10.3407 17.1362C10.2804 17.1298 10.2091 17.1044 10.1112 16.9849C10.0023 16.852 9.88361 16.6283 9.75609 16.2724C9.50034 15.5586 9.2666 14.4874 8.94155 12.9908L8.93639 12.967C8.86237 12.6261 8.79887 12.3337 8.72121 12.0971C8.63817 11.8442 8.52672 11.6141 8.33356 11.4157C8.14062 11.2175 7.91412 11.1001 7.66401 11.0104C7.43033 10.9266 7.14076 10.8556 6.80351 10.7729L6.77988 10.7671L6.41692 10.6781C5.07911 10.3501 4.12891 10.1158 3.49545 9.86513C2.83288 9.60289 2.74372 9.40905 2.73063 9.29786C2.71754 9.18667 2.75924 8.97742 3.34279 8.56848C3.9007 8.1775 4.77052 7.729 5.99556 7.09921L13.4114 3.28669Z"
                  stroke="#FF5200"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_2121_11726">
                  <rect width="20" height="20" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <p>Direction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
