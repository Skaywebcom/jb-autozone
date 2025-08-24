// RentalFleets.js
import HyundaiGrandI10 from "../assets/Cars fleet/Hatchback/Hyundai Grand i10.webp";
import HyundaiI20 from "../assets/Cars fleet/Hatchback/Hyundai i20.webp";
import Alto800 from "../assets/Cars fleet/Hatchback/Maruti Suzuki Alto 800.webp";
import Baleno from "../assets/Cars fleet/Hatchback/Maruti Suzuki Baleno.jpg";
import Swift from "../assets/Cars fleet/Hatchback/Maruti Suzuki Swift.jpg";
import WagonR from "../assets/Cars fleet/Hatchback/Maruti Suzuki Wagon R.jpg";

import KiaCarens from "../assets/Cars fleet/Muv/Kia Carens.webp";
import Ertiga from "../assets/Cars fleet/Muv/Maruti Suzuki Ertiga.webp";
import XL6 from "../assets/Cars fleet/Muv/Maruti Suzuki XL6.webp";
import Triber from "../assets/Cars fleet/Muv/Renault Triber.webp";
import InnovaCrysta from "../assets/Cars fleet/Muv/Toyota Innova Crysta.webp";

import HondaAmaze from "../assets/Cars fleet/Sedan/Honda Amaze.webp";
import HondaCity from "../assets/Cars fleet/Sedan/Honda City.webp";
import HyundaiAura from "../assets/Cars fleet/Sedan/Hyundai Aura.webp";
import Dzire from "../assets/Cars fleet/Sedan/Maruti Suzuki Dzire.webp";
import SkodaSlavia from "../assets/Cars fleet/Sedan/Skoda Slavia.webp";
import TataTigor from "../assets/Cars fleet/Sedan/Tata Tigor.jpeg";

import Creta from "../assets/Cars fleet/Suv Sports/Hyundai Creta.webp";
import Venue from "../assets/Cars fleet/Suv Sports/Hyundai Venue.jpg";
import Seltos from "../assets/Cars fleet/Suv Sports/Kia Seltos.jpeg";
import Sonet from "../assets/Cars fleet/Suv Sports/Kia Sonet.jpg";
import Nexon from "../assets/Cars fleet/Suv Sports/Tata Nexon.jpg";
import Punch from "../assets/Cars fleet/Suv Sports/Tata Punch.webp";

const RentalFleets = [
  { id: 1, carImage: HyundaiGrandI10, pricePerDay: "Rs 5000", carTitle: "Hyundai Grand i10", carYear: "2016", carKm: "4567", carTopSpeed: "120", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 2, carImage: HyundaiI20, pricePerDay: "Rs 4500", carTitle: "Hyundai I20", carYear: "2016", carKm: "1259", carTopSpeed: "120", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 3, carImage: Alto800, pricePerDay: "Rs 4900", carTitle: "Maruti Suzuki Alto 800", carYear: "2014", carKm: "2560", carTopSpeed: "100", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 4, carImage: Baleno, pricePerDay: "Rs 4000", carTitle: "Maruti Suzuki Baleno", carYear: "2014", carKm: "5670", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 5, carImage: Swift, pricePerDay: "Rs 5500", carTitle: "Maruti Suzuki Swift", carYear: "2018", carKm: "1267", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 6, carImage: WagonR, pricePerDay: "Rs 4200", carTitle: "Maruti Suzuki Wagon R", carYear: "2013", carKm: "4567", carTopSpeed: "120", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 7, carImage: KiaCarens, pricePerDay: "Rs 5200", carTitle: "Kia Carens", carYear: "2017", carKm: "5627", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 8, carImage: Ertiga, pricePerDay: "Rs 5000", carTitle: "Maruti Suzuki Ertiga", carYear: "2015", carKm: "4582", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 9, carImage: XL6, pricePerDay: "Rs 5000", carTitle: "Maruti Suzuki XL6", carYear: "2017", carKm: "2560", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 10, carImage: Triber, pricePerDay: "Rs 4500", carTitle: "Renault Triber", carYear: "2015", carKm: "2850", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 11, carImage: InnovaCrysta, pricePerDay: "Rs 5300", carTitle: "Toyota Innova Crysta", carYear: "2014", carKm: "6567", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 12, carImage: HondaAmaze, pricePerDay: "Rs 5500", carTitle: "Honda Amaze", carYear: "2019", carKm: "1267", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 13, carImage: HondaCity, pricePerDay: "Rs 5500", carTitle: "Honda City", carYear: "2019", carKm: "1687", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 14, carImage: HyundaiAura, pricePerDay: "Rs 5800", carTitle: "Hyundai Aura", carYear: "2018", carKm: "3860", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 15, carImage: Dzire, pricePerDay: "Rs 6800", carTitle: "Maruti Suzuki Dzire", carYear: "2019", carKm: "5667", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 16, carImage: SkodaSlavia, pricePerDay: "Rs 5600", carTitle: "Skoda Slavia", carYear: "2017", carKm: "1294", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 17, carImage: TataTigor, pricePerDay: "Rs 5600", carTitle: "Tata Tigor", carYear: "2018", carKm: "1545", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 18, carImage: Creta, pricePerDay: "Rs 6500", carTitle: "Hyundai Creta", carYear: "2015", carKm: "1545", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 19, carImage: Venue, pricePerDay: "Rs 5620", carTitle: "Hyundai Venue", carYear: "2015", carKm: "5945", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 20, carImage: Seltos, pricePerDay: "Rs 5620", carTitle: "Kia Seltos", carYear: "2018", carKm: "2658", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 21, carImage: Sonet, pricePerDay: "Rs 6230", carTitle: "Kia Sonet", carYear: "2015", carKm: "2658", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 22, carImage: Nexon, pricePerDay: "Rs 5230", carTitle: "Tata Nexon", carYear: "2013", carKm: "5685", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" },
  { id: 23, carImage: Punch, pricePerDay: "Rs 3530", carTitle: "Tata Punch", carYear: "2012", carKm: "6895", carTopSpeed: "150", Fuel: "Petrol", Horsepower: "200", Condition: "Driver", Engine: "1900 cm3", Drive: "4x4" }
];

export default RentalFleets;
