import { forwardRef, type InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ id, label, error, ...inputProps }, ref) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        ref={ref}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={error ? "border-destructive" : ""}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-destructive text-xs">
          {error}
        </p>
      )}
    </div>
  )
);
FormField.displayName = "FormField";
