import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PakistaniCities, City } from "@/data/cities";

interface InfoFormProps {
  onSubmit: () => void;
}

const InfoForm = ({ onSubmit }: InfoFormProps) => {
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="container py-10 xs:py-20 w-fit">
      <h1 className="text-3xl font-semibold text-center">Your Information</h1>
      <p className="my-4 text-center">
        Please enter your information below to complete your profile
      </p>
      <form className="mt-10" onSubmit={formSubmitHandler}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            className=""
          />
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Label htmlFor="email">Gender</Label>
          <RadioGroup defaultValue="female" className="flex gap-3">
            <div className="flex items-center space-x-2 border border-input px-4 py-4 rounded-md">
              <Label htmlFor="female">Female</Label>
              <RadioGroupItem value="female" id="female" />
            </div>
            <div className="flex items-center space-x-2 border border-input px-4 py-4 rounded-md">
              <Label htmlFor="male">Male</Label>
              <RadioGroupItem value="male" id="male" />
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Label htmlFor="email">Location</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {PakistaniCities.map((city: City) => (
                <SelectItem key={city.name} value={city.name}>
                  {city.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          className="bg-main hover:bg-mainLight hover:text-black mt-10 w-full"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default InfoForm;
