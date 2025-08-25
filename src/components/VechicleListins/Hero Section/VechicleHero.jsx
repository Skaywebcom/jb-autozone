import { AlertTriangle } from "lucide-react";
import HeroBg from "../Hero Section/VehhicleListing Hero Bg.jpeg";

function VehicleHero() {
  return (
    <div className="vehicle-hero-container w-full h-[60vh] relative overflow-hidden">
      <img
        src={HeroBg}
        className="w-full h-full object-cover object-center"
        alt="Vehicle Listings Hero Background"
      />

      <div className="absolute inset-0 bg-black/60 flex justify-center items-center flex-col px-4 pt-16 md:pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Vehicle Listings
          </h1>
          <p className="text-white/90 tracking-widest text-lg md:text-xl uppercase font-medium">
            Browse Our Premium Fleet
          </p>

          {/* Warning Note */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-r-lg shadow-lg">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                <p className="text-orange-800 font-medium text-sm uppercase tracking-wide">
                  Demo Data - Pricing Not Accurate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleHero;