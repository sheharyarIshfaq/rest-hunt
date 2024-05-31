"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BasicInfo from "./BasicInfo";
import DescriptionAndFAQ from "./DescriptionAndFAQ";
import { Button } from "@/components/ui/button";
import RoomInfo, { IRoom } from "./RoomInfo";
import { toast } from "@/components/ui/use-toast";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";

import SyncLoader from "react-spinners/SyncLoader";

export interface IBasicInfo {
  name: string;
  address: any;
  location: {
    lat: number;
    lng: number;
  };
  nearbySiteName: string;
  propertyType: string;
  propertySize: number;
  propertySizeUnit: string;
}

export interface IFaq {
  question: string;
  answer: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const PropertyDataForm = ({
  propertyId,
  activeTabItem,
}: {
  propertyId?: string;
  activeTabItem?: string | undefined;
}) => {
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const [activeTab, setActiveTab] = React.useState(activeTabItem || "basic");

  const [addedRooms, setAddedRooms] = React.useState<IRoom[]>([]);
  const [basicInfo, setBasicInfo] = React.useState<IBasicInfo>({
    name: "",
    address: null,
    location: { lat: 33.7665138, lng: 72.820658 },
    nearbySiteName: "",
    propertyType: "",
    propertySize: 0,
    propertySizeUnit: "",
  });
  const [description, setDescription] = React.useState("");
  const [faqs, setFaqs] = React.useState<IFaq[]>([]);

  const [currentFAQ, setCurrentFAQ] = React.useState<IFaq>({
    question: "",
    answer: "",
  });
  const [instantBooking, setInstantBooking] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [dataLoading, setDataLoading] = React.useState(false);

  const toastError = (error: string) => {
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: error,
    });
  };

  const validateBasicInfo = () => {
    if (!basicInfo.name) {
      toastError("Please enter property name");
      return false;
    }
    if (!basicInfo.address) {
      toastError("Please enter property address");
      return false;
    }
    if (!basicInfo.nearbySiteName) {
      toastError("Please enter nearby site name");
      return false;
    }
    if (!basicInfo.propertyType) {
      toastError("Please enter property type");
      return false;
    }
    if (!basicInfo.propertySize) {
      toastError("Please enter property size");
      return false;
    }
    if (!basicInfo.propertySizeUnit) {
      toastError("Please enter property size unit");
      return false;
    }
    return true;
  };

  const createProperty = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/properties/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...basicInfo,
          address: basicInfo.address.label,
        }),
      });
      const responseData = await response.json();
      if (responseData.error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.error,
        });
        return false;
      }
      router.push(`/manage-properties/${responseData.data._id}?active=rooms`);
      return true;
    } catch (error: any) {
      toastError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateProperty = async (publish = false) => {
    try {
      const response = await fetch(`${BACKEND_URL}/properties/${propertyId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...basicInfo,
          address: basicInfo.address.label,
          rooms: addedRooms,
          description,
          faqs,
          instantBooking,
          status: publish ? "Pending" : "Draft",
        }),
      });
      const responseData = await response.json();
      if (responseData.error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.error,
        });
        return false;
      }
      return true;
    } catch (error: any) {
      toastError(error.message);
      return false;
    }
  };

  const getPropertyData = async () => {
    setDataLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/properties/${propertyId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();
      if (responseData.error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: responseData.error,
        });
        return;
      }
      const propertyData = responseData.data;
      setBasicInfo({
        name: propertyData.name,
        address: {
          label: propertyData.address,
          value: propertyData.address,
        },
        location: propertyData.location,
        nearbySiteName: propertyData.nearbySiteName,
        propertyType: propertyData.propertyType,
        propertySize: propertyData.propertySize,
        propertySizeUnit: propertyData.propertySizeUnit,
      });
      setAddedRooms(propertyData.rooms);
      setDescription(propertyData.description);
      setFaqs(propertyData.faqs);
      setInstantBooking(propertyData.instantBooking);
    } catch (error: any) {
      toastError(error.message);
    } finally {
      setDataLoading(false);
    }
  };

  //if propertyId is present, we need to fetch the property data
  React.useEffect(() => {
    if (propertyId) {
      getPropertyData();
    }
  }, [propertyId]);

  const saveAndNextHandler = async () => {
    setLoading(true);
    //if active tab is basic, we need to validate the basic info
    if (activeTab === "basic" && !validateBasicInfo()) {
      setLoading(false);
      return;
    } else if (activeTab === "basic") {
      if (propertyId) {
        const success = await updateProperty();
        if (success) {
          setActiveTab("rooms");
        }
        setLoading(false);
      } else {
        const success = await createProperty();
        if (success) {
          setLoading(false);
          return;
        }
      }
    } else if (activeTab === "rooms") {
      setActiveTab("description");
      setLoading(false);
    }
  };

  const publishPropertyHandler = async () => {
    setLoading(true);
    if (!validateBasicInfo()) {
      setLoading(false);
      return;
    }
    const success = await updateProperty(true);
    if (success) {
      setLoading(false);
      toast({
        variant: "success",
        title: "Property Published",
        description: "Your property has been published successfully",
      });
      router.push("/manage-properties");
    }
    setLoading(false);
  };

  const tabChangeHandler = (value: string) => {
    //if active tab is basic, we need to validate the basic info
    if (activeTab === "basic" && !validateBasicInfo()) {
      return;
    }
    //if there is no property id, we need to create the property so we can't move to next tab without saving the basic info
    if (!propertyId) {
      if (activeTab === "basic") {
        saveAndNextHandler();
        return;
      }
    }
    setActiveTab(value);
  };

  return (
    <>
      {!dataLoading && (
        <>
          <Tabs value={activeTab} onValueChange={tabChangeHandler}>
            <TabsList className="flex-col sm:flex-row w-full sm:w-auto h-auto sm:h-10 justify-start sm:justify-center">
              <TabsTrigger value="basic" className="w-full sm:w-auto">
                Basic Information
              </TabsTrigger>
              <TabsTrigger value="rooms" className="w-full sm:w-auto">
                Room Information
              </TabsTrigger>
              <TabsTrigger value="description" className="w-full sm:w-auto">
                Description & FAQ
              </TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
            </TabsContent>
            <TabsContent value="rooms">
              <RoomInfo
                addedRooms={addedRooms}
                setAddedRooms={setAddedRooms}
                propertyId={propertyId}
              />
            </TabsContent>
            <TabsContent value="description">
              <DescriptionAndFAQ
                description={description}
                setDescription={setDescription}
                faqs={faqs}
                currentFAQ={currentFAQ}
                setCurrentFAQ={setCurrentFAQ}
                onAddFAQ={() => {
                  setFaqs((prev) => [...prev, currentFAQ]);
                  setCurrentFAQ({ question: "", answer: "" });
                }}
                instantBooking={instantBooking}
                setInstantBooking={setInstantBooking}
              />
            </TabsContent>
          </Tabs>
          <div className="mt-6 flex items-center justify-between gap-3">
            <Button variant="outline" className="border-black text-black">
              Cancel
            </Button>
            {(activeTab === "basic" || activeTab === "rooms") && (
              <Button
                className="bg-main"
                onClick={saveAndNextHandler}
                disabled={loading}
              >
                Save & Next
              </Button>
            )}
            {activeTab === "description" && (
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="border-black text-black"
                  disabled={loading}
                  onClick={async () => {
                    await updateProperty();
                    router.push("/manage-properties");
                  }}
                >
                  Save as Draft
                </Button>
                <Button className="bg-main" onClick={publishPropertyHandler}>
                  Publish
                </Button>
              </div>
            )}
          </div>
        </>
      )}
      {dataLoading && (
        <div className="w-full h-[70vh] flex items-center justify-center">
          <SyncLoader color="#34C759" />
        </div>
      )}
    </>
  );
};

export default PropertyDataForm;
