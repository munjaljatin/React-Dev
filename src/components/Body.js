import Card from "./Card";
import resList from "../utils/mockData";

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

// exporting the Body component to the outside world!
export default Body;
