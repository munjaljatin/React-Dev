import Card from "./Card";
import resList from "../utils/mockData";
import { useState } from "react";

function ClickTheButton() {
  console.log("Button CLicked");
  alert("alert in the page");
}

// Body Component -- Started
const Body = () => {
  // State Variables in React => React Hooks (Normal JS Functions) Super powerful variable
  // 1. useState()
  // 2. useEffect()

  const [listOfResturants, setListOfResturants] = useState([]);

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
      <div className="filter">
        <button
          className="filter-btn"
          // onMouseOver={(console.log("You clicked the button"), alert("alert"))}
          onClick={(ClickTheButton) => {
            console.log("You clicked the button");
            alert("This is an alert in the page");
            // ClickTheButton();
          }}
          onMouseOver={() => {
            alert("Over");
          }}
        >
          Filter the Restro
        </button>
      </div>
      <div className="cards">
        {/* <Card resData={listOfResturants} /> */}
        <Card resData={resList[1]} />
        <Card resData={resList[2]} />
        <Card resData={resList[3]} />
        <Card resData={resList[4]} />
      </div>
    </div>
  );
};
// Body Component --Ended

// exporting the Body component to the outside world!
export default Body;
