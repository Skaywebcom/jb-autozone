import { useState, useMemo } from 'react';
import RentalFleetsCards from './RentalFleetsCards';
import CarsData from "../../Data/RentalFleets";
import '../Rental fleets/loader.css';
import { 
  Search, 
  Grid3X3, 
  List, 
  ChevronDown,
  Car
} from 'lucide-react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="w-8 h-8 border-3 border-red-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function RentalFleets() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [visibleCars, setVisibleCars] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const bodyTypes = ['All', 'Hatchback', 'Sedan', 'SUV', 'MUV'];

  const filteredCars = useMemo(() => {
    let filtered = CarsData;
    
    if (selectedFilter !== 'All') {
      filtered = filtered.filter(car => car.bodyType === selectedFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(car =>
        car.carTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.make?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedFilter, searchTerm]);

  const displayedCars = filteredCars.slice(0, visibleCars);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCars(prev => prev + 6);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide">
              Premium Fleet
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Rental Fleet
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the perfect ride for every occasion. From compact cars to luxury SUVs, 
            we have the right vehicle for your journey.
          </p>
          
          {/* Decorative lines */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-20 h-px bg-gray-300"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <div className="w-20 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search cars by make or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {bodyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedFilter(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedFilter === type
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white text-red-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white text-red-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {displayedCars.length} of {filteredCars.length} vehicles
          </div>
        </div>

        {/* Cars Grid/List */}
        <RentalFleetsCards 
          cars={displayedCars} 
          viewMode={viewMode}
        />

        {/* No Results Message */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More Section */}
        {visibleCars < filteredCars.length && (
          <div className="text-center mt-12">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <button
                onClick={handleLoadMore}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto hover:scale-105"
              >
                <span>Load More Vehicles</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">{CarsData.length}+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Total Vehicles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">4.6</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RentalFleets;