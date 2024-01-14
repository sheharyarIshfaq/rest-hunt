import Propery1 from "@/public/images/property1.png";
import Propery2 from "@/public/images/property2.png";
import Propery3 from "@/public/images/property3.png";
import Propery4 from "@/public/images/property4.png";
import { StaticImageData } from "next/image";

interface Property {
  image: StaticImageData;
  title: string;
  address: string;
  price: number;
  id: number;
}

const DUMMY_PROPERTIES: Property[] = [
  {
    id: 1,
    image: Propery1,
    title: "Continental Hostel",
    address: "Model Town, Lahore",
    price: 15000,
  },
  {
    id: 2,
    image: Propery2,
    title: "Grand Hostel",
    address: "F6, Islamabad",
    price: 20000,
  },
  {
    id: 3,
    image: Propery3,
    title: "Ali Haider Hostel",
    address: "Uet Taxila, Taxila",
    price: 10000,
  },
  {
    id: 4,
    image: Propery4,
    title: "Safina Hostel",
    address: "Uet Lahore, Lahore",
    price: 12000,
  },
];

export default DUMMY_PROPERTIES;
