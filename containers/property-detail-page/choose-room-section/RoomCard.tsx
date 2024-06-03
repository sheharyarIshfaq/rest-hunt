import Image, { StaticImageData } from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import Enquire from "./Enquire";
import Book from "./Book";
import RoomDetail from "./RoomDetail";

interface IRoomCard {
  property: any;
  type: string;
}

const RoomCard = ({ property, type }: IRoomCard) => {
  const roomData = property?.rooms?.find((item: any) => item.category === type);
  return (
    <>
      <p>
        {roomData?.availableRooms || 0} {type}{" "}
        {type === "entire-place" ? "" : "rooms"}{" "}
        {roomData?.availableRooms === 1 ? "is" : "are"} available{" "}
      </p>
      {roomData && (
        <div className="border p-4 rounded-lg w-full mt-4">
          <div className="flex flex-col xs:flex-row gap-4">
            <Image
              src={roomData?.images[0]}
              alt="Room"
              className="w-full xs:w-56 object-cover"
              width={200}
              height={120}
            />
            <div className="mt-2">
              <h1 className="text-lg font-semibold">{property?.name}</h1>
              <p className="text-sm mt-1">
                From {roomData?.rentAmount}/{roomData?.rentAmountUnit}
              </p>
              <div className="flex items-center gap-1 flex-wrap mt-2">
                {roomData?.generalFacilities?.map(
                  (facility: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 mt-1 min-w-20"
                    >
                      <FaRegCircleCheck className="text-lg" />
                      <span className="capitalize">{facility}</span>
                    </div>
                  )
                )}
              </div>
              <RoomDetail
                title={property?.name}
                price={roomData?.rentAmount}
                images={roomData?.images}
                facilities={roomData?.roomFacilities}
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-3">
            <Enquire
              title={property?.name}
              price={roomData?.rentAmount}
              image={roomData?.images[0]}
              type={type}
            />
            <Book
              title={property?.name}
              price={roomData?.rentAmount}
              image={roomData?.images[0]}
              type={type}
              rentAmountUnit={roomData?.rentAmountUnit}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default RoomCard;
