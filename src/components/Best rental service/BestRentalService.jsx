import sgnImg from "../../assets/sgn.png";
import tw2Img from "../../assets/tw2.png";

function BestRentalService() {
  return (
    <div className="best-rental-service-container w-full flex justify-center items-center px-20 max-lg:px-10 max-md:flex-col max-[500px]:w-[100%] max-[500px]:px-2 max-[500px]:mt-2">
      
      <div className="left-sec w-[50%] flex flex-col justify-center items-start pl-20 text-left max-lg:pl-0 max-md:w-[90%]">
        <h1 className="text-2xl font-medium">Best Rental Service</h1>

        <div className="w-14 h-[0.5px] mt-4 max-lg:mt-6 bg-black"></div>
        <div className="w-14 h-[0.5px] mt-[-18px] ml-4 max-lg:mt-[-10px] bg-black"></div>

        <p className="w-full mt-5 text-sm font-thin">
          Experience the pinnacle of convenience and comfort with our premier
          car rental service.
        </p>

        <p className="w-full mt-2 text-sm font-thin">
          From sleek sedans to spacious SUVs, we offer a diverse fleet to suit
          every journey. Enjoy seamless booking, competitive rates, and
          top-notch customer service, ensuring your road trip is not just a
          drive but an unforgettable adventure.
        </p>

        <img className="mt-2 ml-10 max-md:ml-0" src={sgnImg} alt="Sign" />
      </div>

      <div className="right-sec w-[50%] flex flex-col justify-center items-center max-md:w-[90%] max-md:justify-start">
        <img 
          src={tw2Img} 
          alt="Tw2" 
          className="object-contain relative max-md:translate-y-0 -translate-y-10" 
        />
      </div>
    </div>
  );
}

export default BestRentalService;
