import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";

const Menu = () => {
  // creating a local state variable
  const info = {
    name: "Hotel Empire",
    id: 123,
    Cuisines: ["Bakery", "Item"],
  };
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const fetchMenuData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.68066979999999&lng=76.84450319999999&restaurantId=763334&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await response.json();
    console.log(data);
  };

  return resInfo.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="restaurant">
        <h2>Name of the Restaurant</h2>
      </div>
      <div className="menu-list">
        <ul>
          <li>Burger</li>
          <li>Pizza</li>
          <li>French Fries</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
