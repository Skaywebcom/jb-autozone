import { useState } from "react";
import { Calendar, DollarSign, Filter, X, Car } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function VehicleListingSidebar({ 
  onFiltersChange, 
  currentFilters = {},
  onDateChange,
  vehicleCount = 0 
}) {
  const [pickupDate, setPickupDate] = useState(currentFilters.pickupDate || null);
  const [dropoffDate, setDropoffDate] = useState(currentFilters.dropoffDate || null);
  const [sliderValue, setSliderValue] = useState(currentFilters.maxPrice || 8000);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState(currentFilters.bodyTypes || []);
  const [selectedMake, setSelectedMake] = useState(currentFilters.make || '');
  const [selectedFuel, setSelectedFuel] = useState(currentFilters.fuel || '');

  const bodyTypes = ['SUV', 'Sedan', 'Hatchback', 'MUV'];
  const makes = ['Hyundai', 'Maruti Suzuki', 'Kia', 'Honda', 'Toyota', 'Tata', 'Renault', 'Skoda'];
  const fuelTypes = ['Petrol', 'Diesel', 'CNG', 'Electric'];

  const handleValueChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    updateFilters({ maxPrice: value });
  };

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
    if (onDateChange) onDateChange('pickup', date);
  };

  const handleDropoffDateChange = (date) => {
    setDropoffDate(date);
    if (onDateChange) onDateChange('dropoff', date);
  };

  const handleBodyTypeToggle = (bodyType) => {
    const updatedBodyTypes = selectedBodyTypes.includes(bodyType)
      ? selectedBodyTypes.filter(type => type !== bodyType)
      : [...selectedBodyTypes, bodyType];
    
    setSelectedBodyTypes(updatedBodyTypes);
    updateFilters({ bodyTypes: updatedBodyTypes });
  };

  const handleMakeChange = (make) => {
    setSelectedMake(make);
    updateFilters({ make });
  };

  const handleFuelChange = (fuel) => {
    setSelectedFuel(fuel);
    updateFilters({ fuel });
  };

  const updateFilters = (newFilters) => {
    const filters = {
      pickupDate,
      dropoffDate,
      maxPrice: sliderValue,
      bodyTypes: selectedBodyTypes,
      make: selectedMake,
      fuel: selectedFuel,
      ...newFilters
    };
    
    if (onFiltersChange) {
      onFiltersChange(filters);
    }
  };

  const resetAllFilters = () => {
    setPickupDate(null);
    setDropoffDate(null);
    setSliderValue(8000);
    setSelectedBodyTypes([]);
    setSelectedMake('');
    setSelectedFuel('');
    
    const resetFilters = {
      pickupDate: null,
      dropoffDate: null,
      maxPrice: 8000,
      bodyTypes: [],
      make: '',
      fuel: ''
    };
    
    if (onFiltersChange) {
      onFiltersChange(resetFilters);
    }
  };

  const hasActiveFilters = selectedBodyTypes.length > 0 || selectedMake || selectedFuel || sliderValue < 8000;

  return (
    <div className="sidebar-container w-full bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Filter className="h-5 w-5 text-red-600" />
            Filter Vehicles
          </h3>
          {hasActiveFilters && (
            <button
              onClick={resetAllFilters}
              className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
            >
              <X className="h-4 w-4" />
              Clear All
            </button>
          )}
        </div>
        {vehicleCount > 0 && (
          <p className="text-sm text-gray-600 mt-2">
            {vehicleCount} vehicles found
          </p>
        )}
      </div>

      <div className="p-6 space-y-8">
        {/* Booking Time Section */}
        <div className="booking-time">
          <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2 uppercase tracking-wide">
            <Calendar className="h-4 w-4 text-red-600" />
            Booking Dates
          </h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Pick-up Date</label>
              <DatePicker
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm transition-all duration-200"
                placeholderText="Select pick-up date"
                selected={pickupDate}
                onChange={handlePickupDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                showMonthDropdown
                showYearDropdown
                popperPlacement="bottom-start"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-2">Drop-off Date</label>
              <DatePicker
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm transition-all duration-200"
                placeholderText="Select drop-off date"
                selected={dropoffDate}
                onChange={handleDropoffDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={pickupDate || new Date()}
                showMonthDropdown
                showYearDropdown
                popperPlacement="bottom-start"
              />
            </div>
          </div>
        </div>

        {/* Price Range Section */}
        <div className="price-range">
          <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2 uppercase tracking-wide">
            <DollarSign className="h-4 w-4 text-red-600" />
            Price Range (per day)
          </h4>
          
          <div className="space-y-4">
            <input
              type="range"
              min="3000"
              max="8000"
              step="100"
              value={sliderValue}
              onChange={handleValueChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #DC2626 0%, #DC2626 ${((sliderValue - 3000) / (8000 - 3000)) * 100}%, #E5E7EB ${((sliderValue - 3000) / (8000 - 3000)) * 100}%, #E5E7EB 100%)`
              }}
            />
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 font-medium">₹3,000</span>
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                ₹{sliderValue.toLocaleString()}
              </div>
              <span className="text-sm text-gray-500 font-medium">₹8,000</span>
            </div>
          </div>
        </div>

        {/* Vehicle Body Type Section */}
        <div className="vehicle-body-type">
          <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2 uppercase tracking-wide">
            <Car className="h-4 w-4 text-red-600" />
            Vehicle Type
          </h4>
          
          <div className="grid grid-cols-2 gap-3">
            {bodyTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleBodyTypeToggle(type)}
                className={`px-4 py-3 text-sm font-medium rounded-lg border-2 transition-all duration-200 ${
                  selectedBodyTypes.includes(type)
                    ? 'bg-red-600 text-white border-red-600 shadow-md transform scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Make Section */}
        <div className="vehicle-make">
          <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
            Brand
          </h4>
          
          <select
            value={selectedMake}
            onChange={(e) => handleMakeChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm bg-white transition-all duration-200"
          >
            <option value="">All Brands</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        {/* Fuel Type Section */}
        <div className="fuel-type">
          <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
            Fuel Type
          </h4>
          
          <select
            value={selectedFuel}
            onChange={(e) => handleFuelChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm bg-white transition-all duration-200"
          >
            <option value="">All Fuel Types</option>
            {fuelTypes.map((fuel) => (
              <option key={fuel} value={fuel}>
                {fuel}
              </option>
            ))}
          </select>
        </div>

        {/* Reset Filter Button */}
        <div className="reset-filter pt-4 border-t border-gray-100">
          <button
            onClick={resetAllFilters}
            className="w-full bg-gray-100 hover:bg-red-600 text-gray-700 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <Filter className="h-4 w-4 group-hover:rotate-12 transition-transform" />
            Reset All Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default VehicleListingSidebar;