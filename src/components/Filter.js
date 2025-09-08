const Filter = (props) => {
  const { data } = props;
  console.log(props);
  console.log(data);
  console.log(data[2].info.avgRating);
  // console.log(avgRating);
  return (
    <>
      <button
        className="common rating"
        onCanPlay={() => {
          const result = data.filter((data) => {
            return data.info.avgRating > 4.3;
          });
          console.log(result);
        }}
      >
        Rating 4.0+
      </button>
    </>
  );
};

export default Filter;
