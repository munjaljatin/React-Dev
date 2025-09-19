import { useEffect, useState } from "react";
import { MENU_API_KEY } from "../constant";

export const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState([]);
  // useEffect Hook call the side effect callback function after the initial render
  useEffect(() => {
    fetchMenuData();
  }, []);

  // Function to fetch the menu data
  const fetchMenuData = async () => {
    const response = await fetch(
      MENU_API_KEY + resID + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const data = await response.json();
    const info = data?.data?.cards[2]?.card?.card?.info;
    setResInfo(info);
  };
  return resInfo;
};
