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
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Yup schema to validate the form
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

interface InfoFormProps {
  onInfoSubmit: (name: string, gender: string, location: string) => void;
  loading: boolean;
}

const InfoForm = ({ onInfoSubmit, loading }: InfoFormProps) => {
  const [gender, setGender] = React.useState("male");
  const [location, setLocation] = React.useState("");
  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      name: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ name }) => {
      onInfoSubmit(name, gender, location);
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <section className="container py-10 xs:py-20 w-fit">
      <h1 className="text-3xl font-semibold text-center">Your Information</h1>
      <p className="my-4 text-center">
        Please enter your information below to complete your profile
      </p>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            name="name"
            error={errors.name && touched.name ? true : false}
          />
          {errors.name && touched.name && (
            <span className="text-sm text-red-500 ml-1">{errors.name}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Label htmlFor="email">Gender</Label>
          <RadioGroup
            defaultValue={gender}
            value={gender}
            className="flex gap-3"
          >
            <div
              className="flex items-center space-x-2 border border-input px-4 py-4 rounded-md"
              onClick={() => setGender("male")}
            >
              <Label htmlFor="male">Male</Label>
              <RadioGroupItem value="male" id="male" />
            </div>
            <div
              className="flex items-center space-x-2 border border-input px-4 py-4 rounded-md"
              onClick={() => setGender("female")}
            >
              <Label htmlFor="female">Female</Label>
              <RadioGroupItem value="female" id="female" />
            </div>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Label htmlFor="email">Location</Label>
          <Select onValueChange={(value) => setLocation(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {PakistaniCities.map((city: City, index: number) => (
                <SelectItem key={index} value={city.name}>
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
          {loading && (
            <AiOutlineLoading3Quarters className="animate-spin mr-2" />
          )}
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
    </section>
  );
};

export default InfoForm;
