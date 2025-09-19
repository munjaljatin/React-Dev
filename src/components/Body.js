import Background from "./Background";
import Card from "./Card";
import Filter from "./Filter";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import { FaSearch } from "react-icons/fa";
import resObject from "../../Episode 04 - Talk is Cheap, Show Me The Code!/Coding/data";
import { resList } from "../utils/mockData";
import { Link } from "react-router";

const Body = () => {
  // Whenever there is a change in react state variable, react triggers a reconciliation cycle(re-render the whole component)
  // React is re-rendering the whole body component but it is only updating the input box value inside the DOM, react is very efficient in DOM Manipulation
  // creating a State variable that maintains the state of our component
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");
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
  useEffect(() => {
    fetchSwiggyData();
    console.log("Use effect called");
  }, []);

  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  async function fetchSwiggyData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.461421&lng=78.3346205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    var list =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurantList(list);
    console.log(list);
  }

  // conditional Rendering => Rendering the component according to the condition
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body-container">
      <Background />
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
      </div>
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
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <Card resList={restaurant} key={restaurant.info.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
