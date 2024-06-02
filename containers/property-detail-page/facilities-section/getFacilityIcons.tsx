import { FaRegCircleCheck } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";
import { LuSofa } from "react-icons/lu";
import { CiDumbbell } from "react-icons/ci";
import { MdElevator, MdLocalParking, MdPool } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { TbToolsKitchen } from "react-icons/tb";
import { PiTelevision } from "react-icons/pi";
import { MdBalcony } from "react-icons/md";

const getFacilityIcon = (facility: string) => {
  switch (facility) {
    case "wifi":
      return <FaWifi className="text-lg" />;
    case "parking":
      return <MdLocalParking className="text-lg" />;
    case "security":
      return <CiCamera className="text-lg" />;
    case "furnished":
      return <LuSofa className="text-lg" />;
    case "ac":
      return <TbAirConditioning className="text-lg" />;
    case "heating":
      return <AiOutlineFire className="text-lg" />;
    case "kitchen":
      return <TbToolsKitchen className="text-lg" />;
    case "tv":
      return <PiTelevision className="text-lg" />;
    case "balcony":
      return <MdBalcony className="text-lg" />;
    case "gym":
      return <CiDumbbell className="text-lg" />;
    case "pool":
      return <MdPool className="text-lg" />;
    case "elevator":
      return <MdElevator className="text-lg" />;
    default:
      return <FaRegCircleCheck className="text-lg" />;
  }
};

export default getFacilityIcon;
