import Navbar from "@/components/Shared/Navbar";
import SignupForm from "@/containers/signup-page/signup-form";

export default function SignupPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <SignupForm />
    </div>
  );
}
