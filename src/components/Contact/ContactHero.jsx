import HeroBg from "../Contact/VehhicleListing Hero Bg.jpeg";

function ContactHero() {
  return (
    <>
      <div className="vehicle-hero-container w-full h-[60vh] relative overflow-hidden">
        <img
          src={HeroBg}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          alt="Contact Hero Background"
        />
        
        {/* Enhanced gradient overlay */}
        <div className="bg-gradient-to-t from-black via-black/70 to-black/30 absolute top-0 w-full h-full flex justify-center items-center flex-col">
          
          {/* Animated content container */}
          <div className="text-center space-y-6 px-4 animate-fade-in">
            {/* Main title with improved typography */}
            <h1 className="uppercase text-white text-5xl md:text-6xl font-bold tracking-wide drop-shadow-2xl">
              Contact
            </h1>
            
            {/* Decorative line */}
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full shadow-lg"></div>
            
            {/* Subtitle with better spacing */}
            <p className="text-white/90 tracking-widest text-base md:text-lg uppercase font-light drop-shadow-lg">
              Online Inquiry Form
            </p>
            
            {/* Optional call-to-action hint */}
            <div className="mt-8">
              <div className="animate-bounce">
                <svg 
                  className="w-6 h-6 text-white/70 mx-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </>
  )
}

export default ContactHero