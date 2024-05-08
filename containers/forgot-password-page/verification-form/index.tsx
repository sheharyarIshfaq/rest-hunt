import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Yup schema to validate the form
const schema = Yup.object().shape({
  code: Yup.string().required().min(6),
});

interface VerificationFormProps {
  onVerifySuccess: (code: string) => void;
}

const VerificationForm = ({ onVerifySuccess }: VerificationFormProps) => {
  const [loading, setLoading] = React.useState(false);

  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      code: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ code }) => {
      console.log("code", code);
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
        onVerifySuccess(code);
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
      <h1 className="text-3xl font-semibold text-center">Verification</h1>
      <p className="my-4 text-center">
        Verify it's you by adding the code we just sent on your email address
      </p>
      <div className="mt-8 flex flex-col gap-4 justify-center items-center">
        <InputOTP
          maxLength={6}
          value={values.code}
          onChange={(value) => {
            formik.setFieldValue("code", value);
          }}
          id="code"
          name="code"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        {errors.code && touched.code && (
          <span className="text-sm text-red-500 ml-1 capitalize">
            {errors.code}
          </span>
        )}
      </div>
      <p className="text-center mt-8 ">
        Didn't receive the code?{" "}
        <span className="text-main underline cursor-pointer">Resend</span>
      </p>
      <Button
        disabled={loading}
        className="bg-main hover:bg-mainLight hover:text-black mt-6 w-full"
        type="submit"
      >
        Verify
      </Button>
    </form>
  );
};

export default VerificationForm;
