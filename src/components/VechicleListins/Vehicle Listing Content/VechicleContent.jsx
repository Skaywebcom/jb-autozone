import { useState, useMemo } from "react";
import SortingMenu from "./SortingMenu";
import VehicleCards from "./VehicleCards";
import VehicleListingSidebar from "./VehicleListingSidebar";
import data from "../../../Data/RentalFleets.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

function VehicleContent() {
  // State management
  const [filters, setFilters] = useState({
    pickupDate: null,
    dropoffDate: null,
    maxPrice: 8000,
    bodyTypes: [],
    make: '',
    fuel: ''
  });
  
  const [sortOption, setSortOption] = useState('lastAdded');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter vehicles based on current filters
  const filteredVehicles = useMemo(() => {
    return data.filter(vehicle => {
      // Price filter
      if (vehicle.pricePerDay > filters.maxPrice) return false;
      
      // Body type filter
      if (filters.bodyTypes.length > 0 && !filters.bodyTypes.includes(vehicle.bodyType)) return false;
      
      // Make filter
      if (filters.make && vehicle.make !== filters.make) return false;
      
      // Fuel filter
      if (filters.fuel && vehicle.fuel !== filters.fuel) return false;
      
      return true;
    });
  }, [filters]);

  // Sort vehicles based on current sort option
  const sortedVehicles = useMemo(() => {
    const sorted = [...filteredVehicles];
    
    switch (sortOption) {
      case 'priceAsc':
        return sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
      case 'priceDesc':
        return sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
      case 'nameAsc':
        return sorted.sort((a, b) => a.carTitle.localeCompare(b.carTitle));
      case 'nameDesc':
        return sorted.sort((a, b) => b.carTitle.localeCompare(a.carTitle));
      case 'yearNew':
        return sorted.sort((a, b) => parseInt(b.carYear) - parseInt(a.carYear));
      case 'yearOld':
        return sorted.sort((a, b) => parseInt(a.carYear) - parseInt(b.carYear));
      case 'lastAdded':
      default:
        return sorted; // Keep original order for "Last Added"
    }
  }, [filteredVehicles, sortOption]);

  // Pagination
  const totalPages = Math.ceil(sortedVehicles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVehicles = sortedVehicles.slice(startIndex, startIndex + itemsPerPage);

  // Event handlers
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
    setCurrentPage(1); // Reset to first page when sort changes
  };

  const handleDateChange = (dateType, date) => {
    setFilters(prev => ({
      ...prev,
      [dateType === 'pickup' ? 'pickupDate' : 'dropoffDate']: date
    }));
  };

  const handleBookNow = (vehicle) => {
    // Handle booking logic here
    console.log(`Booking ${vehicle.carTitle}...`);
    alert(`Booking request for ${vehicle.carTitle} - ₹${vehicle.pricePerDay}/day`);
  };

  const handleViewDetails = (vehicle) => {
    // Handle view details logic here
    console.log(`Viewing details for ${vehicle.carTitle}...`);
    alert(`Viewing details for ${vehicle.carTitle}`);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to top of vehicle cards
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const showPages = 5; // Number of page buttons to show
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    // Adjust startPage if we're near the end
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
    );

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 text-sm font-medium border transition-colors duration-200 ${
            i === currentPage
              ? 'bg-red-600 text-white border-red-600'
              : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    );

    return (
      <div className="flex justify-center items-center mt-8">
        <div className="flex -space-x-px">
          {pages}
        </div>
      </div>
    );
  };

  return (
    <div className="vehicle-content-container bg-gray-50 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Left Side */}
          <div className="flex-1 lg:w-2/3">
            {/* Sticky Sorting Bar */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6 sticky top-4 z-30">
              <SortingMenu
                currentSort={sortOption}
                onSortChange={handleSortChange}
                totalResults={sortedVehicles.length}
              />
            </div>

            {/* Vehicle Cards */}
            <VehicleCards
              vehicles={paginatedVehicles}
              onBookNow={handleBookNow}
              onViewDetails={handleViewDetails}
            />

            {/* Pagination */}
            {renderPagination()}

            {/* Results Summary */}
            {sortedVehicles.length > 0 && (
              <div className="text-center text-sm text-gray-600 mt-6 p-4 bg-white rounded-lg shadow-sm">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, sortedVehicles.length)} of {sortedVehicles.length} vehicles
                {filters.bodyTypes.length > 0 || filters.make || filters.fuel || filters.maxPrice < 8000 ? (
                  <span className="ml-2 text-red-600 font-medium">
                    (filtered)
                  </span>
                ) : null}
              </div>
            )}
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:w-1/3 lg:max-w-sm">
            <VehicleListingSidebar
              currentFilters={filters}
              onFiltersChange={handleFiltersChange}
              onDateChange={handleDateChange}
              vehicleCount={sortedVehicles.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleContent;