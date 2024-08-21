import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import HousesGrid from "./HousesGrid";
import { useState } from "react";

const Home = ({ data }) => {
  const [hotelsData, setHotelsData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [propertyType, setPropertyType] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      city.trim().length === 0 ||
      price.trim().length === 0 ||
      propertyType.trim().length === 0
    ) {
      alert("Please fill all the fields");
      return;
    }

    const newDat = data.filter(
      (item) =>
        item.address.split(",").at(-1).toLowerCase() ===
          city.trim().toLowerCase() &&
        (parseInt(price.split("-")[0]) < item.price) &
          (parseInt(price.split("-")[1]) > item.price) &&
        item.type === propertyType
    );
    setHotelsData(newDat);
  };
  console.log(hotelsData);

  const handleOnSearchClick = () => {
    if (searchQuery.trim().length === 0) {
      alert("Please enter a search query");
      return;
    }
    const filteredData = data.filter(
      (item) =>
        item.address.split(",").at(-1).toLowerCase() ===
        searchQuery.trim().toLowerCase()
    );
    setHotelsData(filteredData);
  };

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto">
        {/* Responsive Navigation */}
        <nav className="bg-gray-100 flex flex-col sm:flex-row justify-between py-4 px-2 items-center">
          <span className="mb-2 sm:mb-0">
            <AiFillHome className="text-3xl" />
          </span>
          <span className="text-2xl sm:text-4xl font-semibold text-slate-500 text-center mb-2 sm:mb-0">
            Search properties to rent
          </span>
          <span className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border border-gray-300 outline-none rounded-md w-full sm:w-auto"
            />
            <button
              onClick={handleOnSearchClick}
              className="py-2 px-4 border border-blue-500 outline-none rounded-md text-blue-500 hover:bg-blue-100 active:bg-blue-200"
            >
              Search
            </button>
            <button className="py-2 px-4 border border-blue-500 outline-none rounded-md text-blue-500 hover:bg-blue-100 active:bg-blue-200">
              Liked
            </button>
          </span>
        </nav>

        {/* Responsive Form */}
        <div className="mt-5">
          <form className="flex flex-col md:flex-row justify-between bg-gray-100 items-center py-4 px-4 gap-4">
            <span className="flex flex-col w-full md:w-[21%]">
              <p>Enter City</p>
              <input
                type="text"
                value={city}
                placeholder="All"
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-300 px-2 py-2 rounded-md"
              />
            </span>
            <span className="flex flex-col w-full md:w-[21%]">
              <p>Date</p>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 px-2 py-2 rounded-md"
              />
            </span>
            <span className="flex flex-col w-full md:w-[21%]">
              <p>Price</p>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 px-2 py-2 rounded-md"
              >
                <option value="0-3000">Rs 0 - 3000</option>
                <option value="0-500">Rs 0 - 500</option>
                <option value="500-1000">Rs 500 - 1000</option>
                <option value="1000-1500">Rs 1000 - 1500</option>
                <option value="1500-2000">Rs 1500 - 2000</option>
                <option value="2000-2500">Rs 2000 - 2500</option>
                <option value="2500-3000">Rs 2500 - 3000</option>
              </select>
            </span>
            <span className="flex flex-col w-full md:w-[21%]">
              <p>Property Type</p>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full border border-gray-300 px-2 py-2 rounded-md"
              >
                <option>All</option>
                <option value="hotel">Hotel</option>
                <option value="villa">Villa</option>
                <option value="house">House</option>
                <option value="farm-house">Farm House</option>
                <option value="oyo">Oyo</option>
                <option value="pg">PG</option>
              </select>
            </span>
            <span className="w-full md:w-auto flex justify-center md:mt-5 ">
              <button
                onClick={handleOnSubmit}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 border border-gray-300 outline-none rounded-md w-full md:w-auto"
              >
                Submit
              </button>
            </span>
          </form>
        </div>

        {/* Responsive Houses Grid */}
        <div className="mt-5 w-full">
          <HousesGrid data={hotelsData} />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array,
};

export default Home;
