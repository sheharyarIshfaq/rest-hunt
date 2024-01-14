import Navbar from "@/components/Shared/Navbar";
import LoginForm from "@/containers/login-page/login-form";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <LoginForm />
    </div>
  );
}
