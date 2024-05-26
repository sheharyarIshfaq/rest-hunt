import { FaRegCircleCheck } from "react-icons/fa6";
import { BsTrash } from "react-icons/bs";
import ImageSlider from "@/components/ImageSlider";

interface IAddedRoomCard {
  title: string;
  price: number;
  images: File[];
  facilities: string[];
  onRemove: () => void;
}

const AddedRoomCard = ({
  title,
  price,
  images,
  facilities,
  onRemove,
}: IAddedRoomCard) => {
  return (
    <div className="border p-4 rounded-lg w-full relative">
      <button
        className="absolute top-3 right-3
      bg-gray-100 p-2 rounded-full text-red-500 transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white"
        onClick={onRemove}
      >
        <BsTrash className="text-lg" />
      </button>

      <div className="flex flex-col xs:flex-row gap-4">
        <div className="xs:max-w-[250px] md:max-w-[300px]">
          <ImageSlider
            images={images.map((image) =>
              image instanceof File ? URL.createObjectURL(image) : image
            )}
          />
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-semibold capitalize">{title} Room</h1>
          <p className="text-sm mt-1">From {price}/Month</p>
          <div className="flex items-center gap-3 flex-wrap mt-2">
            {facilities.map((facility: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-2 mt-1 min-w-20"
              >
                <FaRegCircleCheck className="text-lg" />
                <span className="capitalize">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedRoomCard;
