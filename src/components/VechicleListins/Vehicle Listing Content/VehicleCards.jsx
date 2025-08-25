import { Eye, Car, Calendar, Gauge, Fuel, Settings, ArrowRight } from "lucide-react";
import data from "../../../Data/RentalFleets.js";

function VehicleCards({ vehicles = data, onBookNow, onViewDetails }) {
  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <Car className="h-16 w-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No vehicles found</h3>
        <p className="text-gray-500 text-center">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  const handleBookNow = (vehicle) => {
    if (onBookNow) {
      onBookNow(vehicle);
    } else {
      console.log(`Booking ${vehicle.carTitle}...`);
    }
  };

  const handleViewDetails = (vehicle) => {
    if (onViewDetails) {
      onViewDetails(vehicle);
    } else {
      console.log(`Viewing details for ${vehicle.carTitle}...`);
    }
  };

  return (
    <div className="vehicle-cards-grid space-y-6">
      {vehicles.map((car) => (
        <div 
          key={car.id || car.carTitle} 
          className="card-container bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-80 w-full h-48 lg:h-64 overflow-hidden bg-gray-100 relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src={car.carImage} 
                alt={`${car.carTitle} - ${car.bodyType}`}
                onError={(e) => {
                  e.target.src = '/api/placeholder/320/240';
                }}
              />
              {/* Vehicle Type Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {car.bodyType}
                </span>
              </div>
              {/* Year Badge */}
              <div className="absolute top-3 right-3">
                <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
                  {car.carYear}
                </span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex-1">
                {/* Title and Make */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-200">
                    {car.carTitle}
                  </h2>
                  <p className="text-sm text-gray-600 font-medium">{car.make} • {car.model}</p>
                </div>

                {/* Vehicle Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-xs text-gray-500 block">Year</span>
                      <span className="text-sm font-semibold text-gray-900">{car.carYear}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-xs text-gray-500 block">Fuel</span>
                      <span className="text-sm font-semibold text-gray-900">{car.fuel || car.Fuel}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-xs text-gray-500 block">Mileage</span>
                      <span className="text-sm font-semibold text-gray-900">{car.carKm} km</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-xs text-gray-500 block">Engine</span>
                      <span className="text-sm font-semibold text-gray-900">{car.engine || '1900 cm³'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-xs text-gray-500 block">Drive</span>
                      <span className="text-sm font-semibold text-gray-900">{car.drive || '4x4'}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <div>
                      <span className="text-xs text-gray-500 block">Condition</span>
                      <span className="text-sm font-semibold text-gray-900">{car.condition || 'Excellent'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price and Action Section */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-4 border-t border-gray-100">
                {/* Price */}
                <div>
                  <p className="text-sm text-gray-500 mb-1">Price per day</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-red-600">
                      ₹{car.pricePerDay?.toLocaleString() || '0'}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">/ day</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewDetails(car)}
                    className="flex-1 sm:flex-none border border-gray-300 hover:border-red-300 text-gray-700 hover:text-red-600 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:bg-red-50"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="hidden sm:inline">View Details</span>
                    <span className="sm:hidden">Details</span>
                  </button>
                  
                  <button
                    onClick={() => handleBookNow(car)}
                    className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Car className="h-4 w-4" />
                    <span>Book Now</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VehicleCards;