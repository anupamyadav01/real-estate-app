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
  const [filteredData, setFilteredData] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // item.address.split(",").at(-1).toLowerCase() ===
    //   city.trim().toLowerCase() &&
    //   (parseInt(price.split("-")[0]) < item.price) &
    //     (parseInt(price.split("-")[1]) > item.price);

    const newDat = hotelsData.filter((item) => {
      // Extract city from address and ensure it's trimmed and lowercased
      const itemCity = item.address.split(",").at(-1).trim().toLowerCase();
      const filterCity = city.trim().toLowerCase();

      // Parse price range from the filter
      const [minPrice, maxPrice] = price
        .split("-")
        .map((p) => parseInt(p.trim(), 10));

      // Check if all conditions match
      return (
        itemCity === filterCity &&
        item.type === propertyType &&
        item.price >= minPrice &&
        item.price <= maxPrice
      );
    });

    setFilteredData(newDat);
    // console.log(parseInt(price.split("-")[0]));
    console.log(filteredData);
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
            <button className="py-2 px-4 border border-gray-300 outline-none rounded-md">
              Search
            </button>
            <button className="py-2 px-4 border border-gray-300 outline-none rounded-md">
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
                <option value="0-3000">0 - 3000</option>
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
                <option value="All">All</option>
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
          <HousesGrid data={data} />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array,
};

export default Home;
