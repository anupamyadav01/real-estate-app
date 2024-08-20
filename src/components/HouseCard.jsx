/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import { TbBed } from "react-icons/tb";
import { FaBath } from "react-icons/fa";
import { IoCube } from "react-icons/io5";
const HouseCard = ({ house }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={house.imgurl}
        alt={house.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-blue-600 font-bold text-lg">₹ {house.price}/day</p>
          <CiHeart className="text-gray-400" size={24} />
        </div>
        <h3 className="text-xl font-semibold mt-2">{house.title}</h3>
        <p className="text-gray-600">{house.address}</p>
        <div className="flex justify-between mt-4 text-gray-600">
          <span className="flex items-center justify-center gap-2">
            <TbBed className="text-xl" /> {house.beds}Beds
          </span>
          <span className="flex items-center justify-center gap-2">
            <FaBath /> {house.bath}Bath
          </span>
          <span className="flex items-center justify-center gap-2">
            <IoCube /> {house.sqft}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
