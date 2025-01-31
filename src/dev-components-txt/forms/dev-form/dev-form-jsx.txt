"use client";

import React, {
  ComponentProps,
  forwardRef,
  useCallback,
  useState,
} from "react";

// Types and Interfaces
// interface ValidationRule {
//   required?: string | boolean;
//   minLength?: {
//     value: number;
//     message: string;
//   };
//   maxLength?: {
//     value: number;
//     message: string;
//   };
//   pattern?: {
//     value: RegExp;
//     message: string;
//   };
//   validate?: (value: any, allValues: Record<string, string>) => string | any;
// }

// interface ValidationRules {
//   [key: string]: ValidationRule;
// }

// interface FormInputProps
//   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "ref" | "className"> {
//   type?: string;
//   label?: string;
//   error?: string;
//   classNames?: {
//     mainContainer?: string;
//     inputContainer?: string;
//   };
//   name: string;
//   icon?: React.ReactNode;
//   children?: React.ReactNode;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// interface DevFormProps {
//   children: React.ReactNode;
//   onSubmit?: (
//     result: { values: Record<string, string> | null; errors: Record<string, string> | null },
//     e: React.FormEvent
//   ) => void;
//   validationRules?: ValidationRules;
//   className?: string;
// }

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// FormInput Component remains the same
const FormInput = forwardRef(
  (
    {
      type = "text",
      label,
      error,
      icon,
      classNames = { mainContainer: "", inputContainer: "" },
      name,
      children,
      ...props
    },
    ref
  ) => {
    const commonStyle = cn(
      "w-full p-1 rounded-md flex border border-ACCENT transition-all ring-ACCENT/50 items-center",
      children ? "!hidden" : "",
      icon ? "gap-2" : ""
    );
    return (
      <div>
        <div className={cn(classNames.mainContainer)}>
          {label && (
            <label htmlFor={label} className="text-sm block m-1">
              {label}
            </label>
          )}

          <div
            className={cn(
              "has-[:focus]:ring",
              commonStyle,
              classNames.inputContainer
            )}
          >
            {icon && <span className="text-xl text-ACCENT]">{icon}</span>}
            <input
              ref={ref}
              id={label && label}
              type={type}
              name={name}
              {...props}
              className="focus:bg-transparent p-1 bg-transparent rounded-md accent-ACCENT text-sm outline-0 w-full"
            />
          </div>
          {children}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

const DevForm = ({
  children,
  onSubmit,
  validationRules = {},
  className = "",
  ...props
}) => {
  const [errors, setErrors] = useState({});

  // Helper function to normalize and check if a value is empty
  const isEmptyValue = (value) => {
    if (value === null || value === undefined) {
      return true;
    }

    if (value instanceof File) {
      return false; // A File object is never considered empty
    }

    if (Array.isArray(value)) {
      return value.length === 0;
    }

    if (typeof value === "object") {
      return Object.keys(value).length === 0;
    }

    if (typeof value === "string") {
      return value.trim() === "";
    }

    if (typeof value === "number") {
      return false; // Numbers (even 0) are not considered empty
    }

    return !value;
  };

  // Helper function to normalize value for validation
  const normalizeValue = (value) => {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  };

  const validate = (values) => {
    const newErrors = {};

    Object.keys(validationRules).forEach((field) => {
      const rules = validationRules[field];
      const rawValue = values[field];
      const isEmpty = isEmptyValue(rawValue);

      // Check required first
      if (rules.required && isEmpty) {
        newErrors[field] =
          typeof rules.required === "string"
            ? rules.required
            : "This field is required";
        return; // Skip other validations if the field is required and empty
      }

      // Only proceed with other validations if the field has a value
      if (!isEmpty) {
        const value = normalizeValue(rawValue);

        if (rules.minLength && typeof value === "string") {
          if (value.length < rules.minLength.value) {
            newErrors[field] = rules.minLength.message;
            return;
          }
        }

        if (rules.maxLength && typeof value === "string") {
          if (value.length > rules.maxLength.value) {
            newErrors[field] = rules.maxLength.message;
            return;
          }
        }

        if (rules.pattern && typeof value === "string") {
          if (!rules.pattern.value.test(value)) {
            newErrors[field] = rules.pattern.message;
            return;
          }
        }

        if (rules.validate) {
          const customError = rules.validate(value, values);
          if (customError) {
            newErrors[field] = customError;
            return;
          }
        }
      }
    });

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawValues = Object.fromEntries(formData.entries());

    // Normalize all values before validation
    const values = Object.entries(rawValues).reduce((acc, [key, value]) => {
      acc[key] = typeof value === "string" ? value.trim() : value;
      return acc;
    }, {});

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (onSubmit) {
      if (Object.keys(validationErrors).length === 0) {
        onSubmit(
          {
            values: values,
            errors: null,
          },
          e
        );
      } else {
        onSubmit(
          {
            values: null,
            errors: validationErrors,
          },
          e
        );
      }
    }
  };

  const renderChildren = useCallback(() => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;

      if (child.type === FormInput) {
        return React.cloneElement(child, {
          ...child.props,
          error: errors[child.props.name],
        });
      }

      return React.cloneElement(child, {
        ...child.props,
        children: React.Children.map(child.props.children, (grandchild) => {
          if (
            !React.isValidElement(grandchild) ||
            grandchild.type !== FormInput
          ) {
            return grandchild;
          }

          return React.cloneElement(grandchild, {
            ...grandchild.props,
            error: errors[grandchild.props.name],
          });
        }),
      });
    });
  }, [children, errors]);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-4", className)}
      {...props}
    >
      {renderChildren()}
    </form>
  );
};

export { DevForm, FormInput };
