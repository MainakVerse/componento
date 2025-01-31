"use client";
import { DevForm, FormInput } from "./dev-form";

const DevFormUsage: React.FC = () => {
  const validationRules = {
    username: {
      required: "Username is required",
      validate: (value: string) => {
        if (value.length < 3) {
          return "Username must be at least 3 characters";
        }
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    password: {
      required: "Password is required",
      validate: (value: string) => {
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        if (!/[A-Z]/.test(value)) {
          return "Password must contain at least one uppercase letter";
        }
        if (!/[0-9]/.test(value)) {
          return "Password must contain at least one number";
        }
        return null;
      },
    },
    file: {
      required: true,
      validate: (file: File) => {
        if (!file.size) {
          return "Avatar is required";
        }
      },
    },
    terms: {
      required: "You must accept the terms and conditions",
    },
  };

  const handleSubmit = (result: {
    values: Record<string, string | File | boolean> | null;
    errors: Record<string, string> | null;
  }) => {
    if (result.values) {
      console.log("Form values:", result.values);
    } else {
      console.log("Form errors:", result.errors);
    }
  };

  return (
    <DevForm
      className="bg-LIGHT dark:bg-DARK rounded-md p-3 border border-ACCENT/30"
      onSubmit={handleSubmit}
      validationRules={validationRules}
    >
      <FormInput
        name="username"
        type="text"
        label="Username"
        placeholder="Enter username"
      />
      <FormInput
        name="email"
        type="email"
        label="Email"
        placeholder="Enter email"
      />
      <FormInput
        name="password"
        type="password"
        label="Password"
        placeholder="Enter password"
      />
      <FormInput
        name="file"
        type="file"
        label="Avatar"
        placeholder="Upload avatar"
      />
      <FormInput
        name="terms"
        type="checkbox"
        label="I accept the terms and conditions"
        classNames={{
          mainContainer: "flex items-center gap-2 w-fit flex-row-reverse",
          inputContainer: "!w-fit",
        }}
      />

      <button
        type="submit"
        className="w-full bg-ACCENT text-white py-2 px-4 rounded-md !outline-none focus:ring-2 
           focus:ring-ACCENT/50 transition-all"
      >
        Submit
      </button>
    </DevForm>
  );
};

export default DevFormUsage;
