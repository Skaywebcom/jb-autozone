import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function ReviewsCardDetails({ text, name, role, image }) {
  return (
    <div className="review-card-details-container w-[50%] h-full flex flex-col justify-center items-center text-center">
      <FaQuoteRight className="w-10 h-10 text-[#DD3219]" />
      <p className="mt-10 text-xl italic max-[660px]:text-lg max-[550px]:text-sm max-[550px]:w-96">
        {text}
      </p>

      <div className="user-dets mt-10 flex flex-col justify-center items-center">
        <img className="w-12 h-12 rounded-full object-cover" src={image} alt={name} />
        <p className="mt-4 tracking-widest uppercase font-bold">
          — {name}, {role}
        </p>
      </div>
    </div>
  );
}

export default ReviewsCardDetails;
