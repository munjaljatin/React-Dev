import { useState } from "react";
// import "../../Episode 04 - Talk is Cheap, Show Me The Code!/Coding/styles.css";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You Clicked the button {count} times</p>
      <button className="new" onClick={() => setCount(count + 1)}>
        Get the App
      </button>
    </>
  );
};

export default Example;
