/* eslint-disable react/prop-types */
import HouseCard from "./HouseCard";
const HousesGrid = ({ data }) => {
  //   console.log(data);
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
};

export default HousesGrid;
