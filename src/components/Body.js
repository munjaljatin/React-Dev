import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import resObject from "../../Episode 04 - Talk is Cheap, Show Me The Code!/Coding/data";

// Body Component -- Started
const Body = () => {
  // creating a State variable that maintains the state of out component
  const [restaurantList, setRestaurantList] = useState(resObject);
  // const [restaurantList, setRestaurantList] = useState([
  //   {
  //     info: {
  //       id: "8614",
  //       name: "Burger King",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ee1fdf16-ea5f-4a44-9e58-7b3a9dee2618_8614.jpg",
  //       locality: "Connaught Place",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burgers", "American"],
  //       avgRating: 4.4,
  //       avgRatingString: "4.4",
  //       deliveryTime: 26,
  //       rating: "4.2",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "16865",
  //       name: "Pizza Hut",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
  //       locality: "Connaught Place",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.3,
  //       avgRatingString: "4.4",
  //       deliveryTime: 26,
  //       rating: "4.2",
  //     },
  //   },
  // ]);
  // Normal JS Variable
  let restaurantListJS = [
    {
      info: {
        id: "8614",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ee1fdf16-ea5f-4a44-9e58-7b3a9dee2618_8614.jpg",
        locality: "Connaught Place",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.4,
        avgRatingString: "4.4",
        deliveryTime: 26,
        rating: "4.2",
      },
    },
    {
      info: {
        id: "16865",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
        locality: "Connaught Place",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        avgRatingString: "4.4",
        deliveryTime: 26,
        rating: "4.2",
      },
    },
  ];
  // useEffect(callback, dependency array)
  useEffect(() => {
    fetchSwiggyData();
    // fetchZomatoData();
  }, []);

  const fetchSwiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
  };

  const fetchZomatoData = async () => {
    const data = await fetch("https://www.zomato.com/webroutes/auth/init");

    const json = await data.json();
    // const newJson = json.data.cards[0].card.card;
    console.log(json);
  };

  return (
    <div className="main-body-container">
      <div className="body-container">
        <img
          src="https://images.unsplash.com/photo-1543992321-cefacfc2322e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww"
          alt=""
        />
        <div className="centered">
          <h1 className="bd-h1">Order Delivery Near You!</h1>
          <input
            type="text"
            className="delivery"
            placeholder="Enter delivery address"
          />
        </div>
      </div>
      <div className="filter" style={{ margin: "10px" }}>
        <button
          className="filter-btn"
          style={{ padding: "10px" }}
          onClick={() => {
            const result = restaurantList.filter(
              (resObject) => resObject.info.avgRating > 4.3
            );
            console.log(result);
            setRestaurantList(result);
          }}
        >
          Top Rated Restaurants
        </button>
        <button className="use-button" style={{ marginLeft: "80px" }}>
          Use Effect Button
        </button>
      </div>
      <div className="Cards">
        {restaurantList.map((restaurant, index) => (
          <Card resList={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
// Body Component --Ended

// exporting the Body component to the outside world!
export default Body;
