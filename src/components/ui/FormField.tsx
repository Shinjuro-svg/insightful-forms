import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  type?: "text" | "email" | "tel" | "url" | "number" | "date" | "textarea";
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  rows?: number;
}

export const FormField = ({
  id,
  label,
  required = false,
  error,
  type = "text",
  placeholder,
  value,
  onChange,
  rows = 3,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className={cn(error && "text-destructive")}>
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={cn(error && "border-destructive focus-visible:ring-destructive")}
        />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(error && "border-destructive focus-visible:ring-destructive")}
        />
      )}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};
