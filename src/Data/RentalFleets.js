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
  { id: 1, carImage: HyundaiGrandI10, pricePerDay: 5000, carTitle: "Hyundai Grand i10", make: "Hyundai", model: "Grand i10", carYear: "2016", carKm: "4567", carTopSpeed: "120", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Hatchback" },
  { id: 2, carImage: HyundaiI20, pricePerDay: 4500, carTitle: "Hyundai i20", make: "Hyundai", model: "i20", carYear: "2016", carKm: "1259", carTopSpeed: "120", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Hatchback" },
  { id: 3, carImage: Alto800, pricePerDay: 4900, carTitle: "Maruti Suzuki Alto 800", make: "Maruti Suzuki", model: "Alto 800", carYear: "2014", carKm: "2560", carTopSpeed: "100", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Hatchback" },
  { id: 4, carImage: Baleno, pricePerDay: 4000, carTitle: "Maruti Suzuki Baleno", make: "Maruti Suzuki", model: "Baleno", carYear: "2014", carKm: "5670", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Hatchback" },
  { id: 5, carImage: Swift, pricePerDay: 5500, carTitle: "Maruti Suzuki Swift", make: "Maruti Suzuki", model: "Swift", carYear: "2018", carKm: "1267", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Hatchback" },
  { id: 6, carImage: WagonR, pricePerDay: 4200, carTitle: "Maruti Suzuki Wagon R", make: "Maruti Suzuki", model: "Wagon R", carYear: "2013", carKm: "4567", carTopSpeed: "120", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Hatchback" },
  { id: 7, carImage: KiaCarens, pricePerDay: 5200, carTitle: "Kia Carens", make: "Kia", model: "Carens", carYear: "2017", carKm: "5627", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "MUV" },
  { id: 8, carImage: Ertiga, pricePerDay: 5000, carTitle: "Maruti Suzuki Ertiga", make: "Maruti Suzuki", model: "Ertiga", carYear: "2015", carKm: "4582", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "MUV" },
  { id: 9, carImage: XL6, pricePerDay: 5000, carTitle: "Maruti Suzuki XL6", make: "Maruti Suzuki", model: "XL6", carYear: "2017", carKm: "2560", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "MUV" },
  { id: 10, carImage: Triber, pricePerDay: 4500, carTitle: "Renault Triber", make: "Renault", model: "Triber", carYear: "2015", carKm: "2850", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "MUV" },
  { id: 11, carImage: InnovaCrysta, pricePerDay: 5300, carTitle: "Toyota Innova Crysta", make: "Toyota", model: "Innova Crysta", carYear: "2014", carKm: "6567", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "MUV" },
  { id: 12, carImage: HondaAmaze, pricePerDay: 5500, carTitle: "Honda Amaze", make: "Honda", model: "Amaze", carYear: "2019", carKm: "1267", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Sedan" },
  { id: 13, carImage: HondaCity, pricePerDay: 5500, carTitle: "Honda City", make: "Honda", model: "City", carYear: "2019", carKm: "1687", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Sedan" },
  { id: 14, carImage: HyundaiAura, pricePerDay: 5800, carTitle: "Hyundai Aura", make: "Hyundai", model: "Aura", carYear: "2018", carKm: "3860", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Sedan" },
  { id: 15, carImage: Dzire, pricePerDay: 6800, carTitle: "Maruti Suzuki Dzire", make: "Maruti Suzuki", model: "Dzire", carYear: "2019", carKm: "5667", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Sedan" },
  { id: 16, carImage: SkodaSlavia, pricePerDay: 5600, carTitle: "Skoda Slavia", make: "Skoda", model: "Slavia", carYear: "2017", carKm: "1294", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Sedan" },
  { id: 17, carImage: TataTigor, pricePerDay: 5600, carTitle: "Tata Tigor", make: "Tata", model: "Tigor", carYear: "2018", carKm: "1545", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "Sedan" },
  { id: 18, carImage: Creta, pricePerDay: 6500, carTitle: "Hyundai Creta", make: "Hyundai", model: "Creta", carYear: "2015", carKm: "1545", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "SUV" },
  { id: 19, carImage: Venue, pricePerDay: 5620, carTitle: "Hyundai Venue", make: "Hyundai", model: "Venue", carYear: "2015", carKm: "5945", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "SUV" },
  { id: 20, carImage: Seltos, pricePerDay: 5620, carTitle: "Kia Seltos", make: "Kia", model: "Seltos", carYear: "2018", carKm: "2658", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "SUV" },
  { id: 21, carImage: Sonet, pricePerDay: 6230, carTitle: "Kia Sonet", make: "Kia", model: "Sonet", carYear: "2015", carKm: "2658", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "SUV" },
  { id: 22, carImage: Nexon, pricePerDay: 5230, carTitle: "Tata Nexon", make: "Tata", model: "Nexon", carYear: "2013", carKm: "5685", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "SUV" },
  { id: 23, carImage: Punch, pricePerDay: 3530, carTitle: "Tata Punch", make: "Tata", model: "Punch", carYear: "2012", carKm: "6895", carTopSpeed: "150", fuel: "Petrol", horsepower: "200", condition: "Driver", engine: "1900 cm3", drive: "4x4", bodyType: "SUV" }
];

export default RentalFleets;
