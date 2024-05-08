import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Yup schema to validate the form
const schema = Yup.object().shape({
  password: Yup.string().required().min(6),
  confirmPassword: Yup.string().required().min(6),
});

interface ResetPasswordFormProps {
  email: string;
  code: string;
}

const ResetPasswordForm = ({ email, code }: ResetPasswordFormProps) => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  // Formik hook to handle the form state
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ password, confirmPassword }) => {
      // Check if the passwords match
      if (password !== confirmPassword) {
        return toast({
          variant: "destructive",
          title: "Passwords do not match",
          description: "Please make sure the passwords match",
        });
      }
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
        toast({
          variant: "success",
          title: "Password reset successful",
          description: "You can now login with your new password",
        });
        router.push("/login");
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
        <div className="flex flex-col gap-1">
          <Input
            type="password"
            placeholder="Enter your new password"
            value={values.password}
            onChange={handleChange}
            id="password"
            name="password"
            error={errors.password && touched.password ? true : false}
          />
          {errors.password && touched.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Input
            type="password"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={handleChange}
            id="confirmPassword"
            name="confirmPassword"
            error={
              errors.confirmPassword && touched.confirmPassword ? true : false
            }
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword}
            </span>
          )}
        </div>
      </div>
      <Button
        disabled={loading}
        className="bg-main hover:bg-mainLight hover:text-black mt-10 w-full"
        type="submit"
      >
        Reset Password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
