import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ChangeEvent,
  forwardRef,
  useRef,
  useState,
} from "react";
import { FaPaperclip } from "react-icons/fa6";

export interface FormFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value"
> {
  error?: string;
  value?: string | number | readonly string[] | FileList;
}

const FormField = ({ error, value, ...props }: FormFieldProps) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <input
        className="rounded-sm px-2 py-1 bg-muted-light/50 outline-none focus:scale-101 focus:bg-muted-light transition-colors w-full"
        value={
          props.type === "file"
            ? undefined
            : (value as string | number | readonly string[])
        }
        {...props}
      />
      {error && <small className="text-red-500">{error}</small>}
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
  return (
    <div className="flex flex-col items-start gap-2">
      <textarea
        className="rounded-sm px-2 py-1 bg-muted-light/50 outline-none focus:scale-101 focus:bg-muted-light transition-colors resize-none w-full"
        {...props}
      />
      {error && <small className="text-red-500">{error}</small>}
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
          className="rounded-full px-2 py-1 transition-colors text-small cursor-pointer flex items-center gap-2 text-muted-light hover:text-white"
        >
          <FaPaperclip />
          {fileName ?? "Anexar projeto"}
        </button>
        {error && <small className="text-red-500">{error}</small>}
      </div>
    );
  },
);
FormFileField.displayName = "FormFileField";

export default FormField;
