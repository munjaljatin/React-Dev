import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
// import "./Images/intro.mp4";

/**
 * Header
 *    logo
 *    Nav-links
 *
 * Body
 *    Restaurant Container
 *    Restaurant Card
 * Footer
 *
 *    links
 *    Address
 *    Copyright
 */

// src={
//   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//   resData.data.cloudinaryImageId
// }

/********* Swiggy API ********/
const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "253730",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/b4146d3a-cf4a-4b17-8354-23fc43508e8f_253730.JPG",
      locality: "Manimajra",
      areaName: "Manimajra",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "5.8K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "2.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21a60a9e-acf4-49f8-9844-e30970f818f8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/mcdonalds-manimajra-rest253730",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "48343",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d5ffbebe-9d4e-48ab-8579-b74c074f2b01_48343.JPG",
      locality: "Sector 9",
      areaName: "Sector 9",
      costForTwo: "₹500 for two",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 4.4,
      parentId: "547",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-30 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "3.8K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21a60a9e-acf4-49f8-9844-e30970f818f8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/kfc-sector-9-rest48343",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "350219",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/7792e3a8-9bb1-4e5d-a750-f1e049325531_350219.JPG",
      locality: "Sector-6",
      areaName: "Panchkula",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.8",
      totalRatingsString: "4.5K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-29 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹124",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21a60a9e-acf4-49f8-9844-e30970f818f8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/nic-ice-creams-sector-6-panchkula-rest350219",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "652981",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/47b8a767-e288-40d5-96d3-82c9675f63db_652981.jpg",
      locality: "Sector 9",
      areaName: "Panchkula",
      costForTwo: "₹350 for two",
      cuisines: ["American", "Cafe"],
      avgRating: 3.8,
      parentId: "166",
      avgRatingString: "3.8",
      totalRatingsString: "40",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-30 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "2.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21a60a9e-acf4-49f8-9844-e30970f818f8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/burger-king-sector-9-panchkula-rest652981",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "763334",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/23/7ca95e70-4ccc-4588-ac81-9d1587403f17_763334.JPG",
      locality: "Sector-10",
      areaName: "Opposite Panchkula Bus Stand",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "897",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-30 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹1099",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21a60a9e-acf4-49f8-9844-e30970f818f8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/theobroma-sector-10-opposite-panchkula-bus-stand-rest763334",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "55471",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/8a028f1a-b7cc-46f2-a76c-a5aa9a33b236_55471.JPG",
      locality: "MDC Complex, Panchkula",
      areaName: "Sector 5",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "4.5K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-30 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21a60a9e-acf4-49f8-9844-e30970f818f8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/pizza-hut-mdc-complex-panchkula-sector-5-rest55471",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "718485",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Near D Mart",
      areaName: "Peer Muchalla",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.3,
      parentId: "61955",
      avgRatingString: "4.3",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21a60a9e-acf4-49f8-9844-e30970f818f8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/chinese-wok-near-d-mart-peer-muchalla-rest718485",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "718486",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_718486.JPG",
      locality: "Near D Mart",
      areaName: "Peer Muchalla",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Tibetan", "Desserts"],
      avgRating: 4.4,
      parentId: "434792",
      avgRatingString: "4.4",
      totalRatingsString: "729",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "9.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-07-30 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-21a60a9e-acf4-49f8-9844-e30970f818f8",
    },
    cta: {
      link: "https://www.swiggy.com/city/chandigarh/big-bowl-near-d-mart-peer-muchalla-rest718486",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
/********* Swiggy API ********/

// Header Component -- Started
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"
          alt="food"
          style={{ width: "90px" }}
        />
      </div>
      <div className="nav-items">
        <ul className="links">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Food</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <button className="get-the-app">Get the App</button>
          <button className="sign-in">Sign in</button>
        </ul>
      </div>
    </div>
  );
};
// Header Component -- Ended

// Body Component -- Started
const Body = () => {
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
      <div className="cards">
        <Card resData={resList[0]} />
        <Card resData={resList[1]} />
        <Card resData={resList[2]} />
        <Card resData={resList[3]} />
        <Card resData={resList[4]} />
      </div>
    </div>
  );
};
// Body Component --Ended

// Card Component -- Started
const Card = (props) => {
  const { id, name, cloudinaryImageId, locality, costForTwo } = props;
  const { resData } = props;
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
          height="182px"
          width="100%"
          alt=""
        />
      </div>
      <div className="text-container">
        <h3>
          {resData.info.cuisines.join(", ")}
          <p>{resData.info.costForTwo}</p>
        </h3>
        <p>{resData.info.name}</p>
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

// Footer Component -- Started
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="foo-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"
          alt=""
        />
        <p>Copyright</p>
      </div>
      <div>
        <h4 className="heading4">Company</h4>
        <ul className="foo-links">
          <li>About Us</li>
          <li>Swiggy Corporate</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h4 className="heading4">Contact Us</h4>
        <ul className="foo-links">
          <li>Help & Support</li>
          <li>Partner With Us</li>
          <li>Ride With Us</li>
        </ul>
      </div>
      <div>
        <h4 className="heading4">Available In</h4>
        <ul className="foo-links">
          <li>Bengaluru</li>
          <li>Hyderabad</li>
          <li>Mumbai</li>
          <li>Delhi</li>
        </ul>
      </div>
      <div>
        <div className="life-at-swiggy">
          <h4 className="heading4">Life at Swiggy</h4>
          <ul className="foo-links">
            <li>Explore With Swiggy</li>
            <li>Swiggy News</li>
            <li>Snackables</li>
          </ul>
        </div>
        <div className="social-links">
          <h4>Social Links</h4>
          <div className="media-links">
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
// Footer Component -- Ended

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <ImageSection />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
