import { z } from "zod";

const mobile = z.string().regex(/^[0-9]{10}$/, "Enter a valid 10-digit mobile number");
const aadhar = z.string().regex(/^[0-9]{12}$/, "Enter a valid 12-digit Aadhar number");

export const loginSchema = z.object({
  mobile,
  aadhar,
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required"),
    mobile,
    aadhar,
    password: z.string().min(6, "Must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
