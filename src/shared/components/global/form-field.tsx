import { usePathname } from "next/navigation";
import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ChangeEvent,
  forwardRef,
  useRef,
  useState,
} from "react";
import { FaPaperclip } from "react-icons/fa6";
import { AppSmall } from "../ui/app-small";

export interface FormFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value"
> {
  error?: string;
  value?: string | number | readonly string[] | FileList;
}

const FormField = ({ error, value, ...props }: FormFieldProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <input
        className={`rounded-sm px-2 py-1  focus:scale-101 w-full transition-all outline-none
          ${isHome ? "bg-muted-light/50" : "ring"}`}
        value={
          props.type === "file"
            ? undefined
            : (value as string | number | readonly string[])
        }
        {...props}
      />
      {error && <AppSmall className="text-red-500">{error}</AppSmall>}
    </div>
  );
};

export interface FormTextAreaProps extends Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "value"
> {
  error?: string;
  value?: string;
}

export const FormTextArea = ({ error, ...props }: FormTextAreaProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <div className="flex flex-col items-start gap-2">
      <textarea
        className={`rounded-sm px-2 py-1  focus:scale-101 w-full transition-all outline-none
          ${isHome ? "bg-muted-light/50" : "ring"}`}
        {...props}
      />
      {error && <AppSmall className="text-red-500">{error}</AppSmall>}
    </div>
  );
};

export interface FormFileFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "type"
> {
  error?: string;
  onChange?: (files: FileList) => void;
}

export const FormFileField = forwardRef<HTMLInputElement, FormFileFieldProps>(
  ({ error, onChange, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files as FileList;
      setFileName(files?.[0]?.name ?? null);
      onChange?.(files);
    };

    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
      <div className="flex flex-col items-start gap-2">
        <input
          ref={(node) => {
            inputRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
          type="file"
          className="hidden"
          onChange={handleChange}
          {...props}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={`rounded-full px-2 py-1 transition-colors text-small cursor-pointer flex items-center gap-2  
            ${isHome ? "text-muted-light hover:text-white" : "text-muted-light hover:text-muted"}`}
        >
          <FaPaperclip />
          {fileName ?? "Anexar projeto"}
        </button>
        {error && <AppSmall className="text-red-500">{error}</AppSmall>}
      </div>
    );
  },
);
FormFileField.displayName = "FormFileField";

export default FormField;
