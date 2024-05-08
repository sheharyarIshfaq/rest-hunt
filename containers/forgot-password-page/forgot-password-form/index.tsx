import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Yup schema to validate the form
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
});

interface ForgotPasswordFormProps {
  onSendVerificationCode: (email: string) => void;
}

const ForgotPasswordForm = ({
  onSendVerificationCode,
}: ForgotPasswordFormProps) => {
  const [loading, setLoading] = React.useState(false);

  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ email }) => {
      try {
        setLoading(true);
        // const response = await fetch(`${BACKEND_URL}/users/forgot-password`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email,
        //   }),
        // });

        // const responseData = await response.json();
        // if (responseData.error) {
        //   return toast({
        //     variant: "destructive",
        //     title: "Uh oh! Something went wrong.",
        //     description: responseData.error,
        //   });
        // }
        onSendVerificationCode(email);
      } catch (err: any) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: err.message,
        });
      } finally {
        setLoading(false);
      }
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <form onSubmit={handleSubmit} className="container py-10 xs:py-20 w-fit">
      <h1 className="text-3xl font-semibold text-center">Forgot Password?</h1>
      <p className="my-4 text-center">
        Enter the email address associated with your account
      </p>
      <div className="mt-8 flex flex-col gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          id="email"
          name="email"
          error={errors.email && touched.email ? true : false}
        />
        {errors.email && touched.email && (
          <span className="text-sm text-red-500 ml-1 capitalize">
            {errors.email}
          </span>
        )}
      </div>
      <Button
        disabled={loading}
        className="bg-main hover:bg-mainLight hover:text-black mt-10 w-full"
        type="submit"
      >
        Send Verification Code
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
