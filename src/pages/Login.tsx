import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { FormField } from "@/components/auth/FormField";
import { loginSchema } from "@/lib/validation";
import { login } from "@/services/auth";
import type { LoginInput } from "@/types/auth";

const Login = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (values: LoginInput) => {
    setFormError(null);
    const result = await login(values);
    if (!result.ok) {
      setFormError(result.error ?? "Login failed. Please try again.");
      return;
    }
    toast.success(result.mode === "demo" ? "Demo login — no account was checked" : "Logged in");
    navigate("/soil-setup");
  };

  return (
    <AuthLayout
      title="Welcome back to Agronova"
      subtitle="Log in to continue"
      footer={
        <>
          New to Agronova?{" "}
          <Link to="/register" className="text-primary font-medium underline">
            Create an account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <FormField
          id="mobile"
          label="Mobile Number"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="Enter 10-digit mobile"
          error={errors.mobile?.message}
          {...register("mobile")}
        />
        <FormField
          id="aadhar"
          label="Aadhar Card Number"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder="12-digit Aadhar"
          error={errors.aadhar?.message}
          {...register("aadhar")}
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password")}
        />
        {formError && (
          <p role="alert" className="text-destructive text-sm">
            {formError}
          </p>
        )}
        <Button type="submit" className="w-full" variant="success" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />}
          {isSubmitting ? "Logging in…" : "Login"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
