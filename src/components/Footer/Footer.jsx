import bgImg from "../Footer/Footer bg.jpeg";
import logo from "../../assets/Logo.png";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Printer,
  Mail,
  Clock,
  ChevronRight
} from "lucide-react";

const socialIcons = [
  {
    icon: <Twitter className="w-5 h-5" />,
    name: "Twitter",
    href: "#"
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    name: "Facebook", 
    href: "#"
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    name: "Instagram",
    href: "#"
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    name: "YouTube",
    href: "#"
  }
];

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Our Fleet", href: "#" },
  { name: "Reservations", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact", href: "#" }
];

const services = [
  { name: "Luxury Car Rental", href: "#" },
  { name: "Corporate Rentals", href: "#" },
  { name: "Airport Transfers", href: "#" },
  { name: "Long-term Rentals", href: "#" },
  { name: "Chauffeur Service", href: "#" }
];

function Footer() {
  return (
    <footer className="relative">
      {/* Main Footer Section */}
      <div className="footer-container w-full min-h-[90vh] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bgImg}
            className="w-full h-full object-cover"
            alt="Footer background"
          />
        </div>

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90"></div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 py-16">
          
          {/* Logo Section */}
<div className="text-center mb-12 animate-fade-in">
  <img src={logo} alt="AutoZone Logo" className="w-20 h-20 mx-auto" />
  <div className="space-y-2 mt-4">
    <p className="text-red-400 text-sm font-medium tracking-[0.2em] uppercase">
      Premium Car Rental Service
    </p>
  </div>
</div>

          {/* Main Content Grid */}
          <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Location */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 tracking-wide">SHOWROOM LOCATION</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      32 Market St.128, Deeja Town<br />
                      Florida, CA 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Phone</p>
                      <p className="text-white font-semibold">+1 (234) 567 8900</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Printer className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Fax</p>
                      <p className="text-white font-semibold">+1 (234) 567 8998</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Email</p>
                      <p className="text-white font-semibold">info@yoursite.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider">Hours</p>
                      <p className="text-white font-semibold">Mon – Fri :: 9am – 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 text-red-400 mr-2 group-hover:text-red-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="flex items-center text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 text-red-400 mr-2 group-hover:text-red-300" />
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center mb-12">
            <h3 className="text-white font-semibold mb-6 tracking-wide">Follow Us</h3>
            <div className="flex items-center justify-center gap-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  aria-label={item.name}
                  className="group relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:scale-110 hover:-translate-y-1"
                >
                  <span className="text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div className="absolute inset-0 bg-red-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full max-w-md mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4">Get the latest deals and offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-r-lg text-white font-semibold transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black/95 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left tracking-wide">
              COPYRIGHT © 2024 AUTOZONE BEST CAR RENTAL PRICE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
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
    </footer>
  );
}

export default Footer;