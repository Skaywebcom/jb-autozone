import React from "react";
import FacilitiesCard from "./FacilitiesCard";

import { GiSpeedometer } from "react-icons/gi";
import { RiSteering2Line } from "react-icons/ri";
import { RiPriceTag3Fill } from "react-icons/ri";

function FacilitiesSection() {
  return (
    <div>
      <div className="w-full min-h-[50vh]  flex justify-center items-center my-20 max-md:h-[120vh] ]">
        <div className="f-card-container w-full h-[60vh]  flex gap-4 justify-center items-center max-lg:gap-4 max-md:flex-col max-md:h-auto max-md:mb-10 ">
          <FacilitiesCard
            fCardIcon={<GiSpeedometer className="w-24 h-24 text-[#DD3219] max-lg:w-20 max-lg:h-20 group-hover:text-[#ffffff]" />}
            fCardTagline="Fast & Easy Booking"
            fCardText="Experience a seamless reservation process designed for speed and efficiency."
          />

          <FacilitiesCard
            fCardIcon={<RiSteering2Line className="w-24 h-24 text-[#DD3219] max-lg:w-20 max-lg:h-20 group-hover:text-[#ffffff]" />}
            fCardTagline="Multiple Pickup Locations"
            fCardText="Access a wide network of convenient pickup points tailored to your journey."
          />
          <FacilitiesCard 
           fCardIcon={<RiPriceTag3Fill className="w-24 h-24 text-[#DD3219] max-lg:w-20 max-lg:h-20 group-hover:text-[#ffffff]" />}
           fCardTagline="No Booking Fees"
           fCardText="Benefit from transparent pricing with absolutely no additional booking charges."
          />
        </div>
      </div>
    </div>
  );
}

export default FacilitiesSection;
