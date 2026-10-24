import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { FormField } from "@/components/auth/FormField";
import { registerSchema } from "@/lib/validation";
import { register as registerUser } from "@/services/auth";
import type { RegisterInput } from "@/types/auth";

const Register = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (values: RegisterInput) => {
    setFormError(null);
    const result = await registerUser(values);
    if (!result.ok) {
      setFormError(result.error ?? "Registration failed. Please try again.");
      return;
    }
    toast.success(
      result.mode === "demo" ? "Demo registration — no account was created" : "Account created"
    );
    navigate("/soil-setup");
  };

  return (
    <AuthLayout
      title="Join Agronova"
      subtitle="Create your account"
      footer={
        <>
          Already registered?{" "}
          <Link to="/login" className="text-primary font-medium underline">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <FormField
          id="name"
          label="Full Name"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register("name")}
        />
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
          autoComplete="new-password"
          placeholder="Create a password"
          error={errors.password?.message}
          {...register("password")}
        />
        <FormField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="new-password"
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
        {formError && (
          <p role="alert" className="text-destructive text-sm">
            {formError}
          </p>
        )}
        <Button type="submit" className="w-full" variant="success" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />}
          {isSubmitting ? "Creating account…" : "Register & Continue"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Register;
