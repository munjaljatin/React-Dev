import Background from "./Background";
import Card from "./Card";
import Filter from "./Filter";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import { FaSearch } from "react-icons/fa";
import resObject from "../../Episode 04 - Talk is Cheap, Show Me The Code!/Coding/data";

// Body Component -- Started
const Body = () => {
  // Whenever there is a change in react state variable, react triggers a reconciliation cycle(re-render the whole component)
  // React is re-rendering the whole body component but it is only updating the input box value inside the DOM, react is very efficient in DOM Manipulation
  // creating a State variable that maintains the state of out component
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
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
  }, []);

  const fetchSwiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    var list =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurantList(list);
    console.log(list);
  };

  // conditional Rendering => Rendering the component according to the condition
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body-container">
      <Background />
      {/* <div className="body-container">
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
      </div> */}
      <div className="filter" style={{ margin: "10px" }}>
        <button
          className="filter-btn"
          style={{ padding: "10px" }}
          onClick={() => {
            const result = restaurantList.filter(
              (resObject) => resObject.info.avgRating > 4.3
            );
            setRestaurantList(result);
          }}
        >
          Top Rated Restaurants
        </button>
        <button className="use-button" style={{ marginLeft: "80px" }}>
          Use Effect Button
        </button>
      </div>

      {/* <div className="filter-btn-container">
        <Filter data={restaurantList} />
      </div> */}
      <div className="search-container">
        <input
          type="text"
          id="input-search"
          placeholder="Explore the World!"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-icon"
          onClick={() => {
            console.log(searchText);
          }}
        >
          <FaSearch size={18} color="lightgrey" />
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
