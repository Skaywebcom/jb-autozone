import { useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import carImg from "../../assets/Cars fleet/Hatchback/Hyundai Grand i10.webp";

import { RiSteeringLine } from "react-icons/ri";
import { TbRoad } from "react-icons/tb";
import { IoMdSpeedometer } from "react-icons/io";
import { FaAnglesRight } from "react-icons/fa6";
import { Car, Calendar, Gauge, Fuel, Users, Star, Eye } from "lucide-react";

const CarCard = ({ car, viewMode }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Use fallback image if car image fails to load
  const handleImageError = () => {
    setImageError(true);
  };

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <div className="h-48 md:h-full bg-gray-200 relative overflow-hidden">
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <Car className="w-8 h-8 text-gray-400" />
                </div>
              )}
              <img
                src={imageError ? carImg : car.carImage}
                alt={car.carTitle}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={handleImageError}
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ₹{car.pricePerDay?.toLocaleString() || car.pricePerDay}/day
              </div>
            </div>
          </div>

          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {car.carTitle}
                </h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">
                    {car.rating || "4.5"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{car.carYear}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gauge className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{car.carKm} km</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Fuel className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{car.fuel}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {car.passengers || "5"} seats
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-gray-800 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-fit uppercase">
              <Eye className="w-4 h-4" />
              <span>View Details</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative">
        <div className="h-56 bg-gray-200 relative overflow-hidden">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <Car className="w-8 h-8 text-gray-400" />
            </div>
          )}
          <img
            src={imageError ? carImg : car.carImage}
            alt={car.carTitle}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
          />
        </div>

        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          ₹{car.pricePerDay?.toLocaleString() || car.pricePerDay}
          <span className="block text-xs opacity-90">/ per day</span>
        </div>

        <div className="absolute top-4 left-4">
          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
            {car.bodyType || "Car"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 truncate pr-2">
            {car.carTitle}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{car.rating || "4.5"}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <RiSteeringLine className="w-6 h-6 text-gray-400" />
            <span className="text-sm font-light text-gray-600">
              {car.carYear}
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <TbRoad className="w-6 h-6 text-gray-400" />
            <span className="text-sm font-light text-gray-600">
              {car.carKm}
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <IoMdSpeedometer className="w-6 h-6 text-gray-400" />
            <span className="text-sm font-light text-gray-600">
              {car.carTopSpeed}
            </span>
          </div>
        </div>

        <button className="w-full bg-gray-800 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-bold text-sm uppercase transition-all duration-300 flex items-center justify-center space-x-2 group transform hover:scale-105">
          <span>View Details</span>
          <FaAnglesRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

// ✅ Add PropTypes
CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    carTitle: PropTypes.string.isRequired,
    carImage: PropTypes.string,
    pricePerDay: PropTypes.number,
    carYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    carKm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    carTopSpeed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fuel: PropTypes.string,
    passengers: PropTypes.number,
    bodyType: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  viewMode: PropTypes.oneOf(["grid", "list"]).isRequired,
};

function RentalFleetsCards({ cars = [], viewMode = "grid" }) {
  return (
    <div
      className={`${
        viewMode === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-0"
      } mb-8`}
    >
      {cars.map((car) => (
        <CarCard key={car.id} car={car} viewMode={viewMode} />
      ))}
    </div>
  );
}

// ✅ Add PropTypes
RentalFleetsCards.propTypes = {
  cars: PropTypes.arrayOf(CarCard.propTypes.car).isRequired,
  viewMode: PropTypes.oneOf(["grid", "list"]),
};

export default RentalFleetsCards;
