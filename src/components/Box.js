// Box Functional Component
const Box = () => {
  return (
    <div className="box-container">
      <div
        className="box box-1"
        onClick={function log() {
          console.log("You clicked the box 1");
          alert("this is an alert in the page");
        }}
      ></div>
      <div className="box box-2"></div>
      <div className="box box-3"></div>
      <div className="box box-4"></div>
    </div>
  );
};

// Exporting the Box to the outside world!
export default Box;
