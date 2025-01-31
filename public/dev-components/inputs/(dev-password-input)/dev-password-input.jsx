'use client'
import React, { useState, useCallback } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import DevInputV1 from "../(dev-input-v1)/dev-input-v1";
const DevPasswordInput= ({
  error,
  onChange,
  required = false,
  ...props
}) => {
  const [state, setState] = useState({
    hide: true,
    strength: ""
  });

  const checkPasswordStrength = useCallback((pass) => {
    if (!pass.trim()) {
      setState(prev => ({ ...prev, strength: required ? "error" : "" }));
      return;
    }

    let score = 0;
    if (pass.length >= 4) score++;
    if (pass.length >= 8) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    const strengthMap = {
      0: "error",
      1: "weak",
      2: "weak",
      3: "medium",
      4: "medium",
      5: "strong",
      6: "very strong"
    };

    setState(prev => ({ 
      ...prev, 
      strength: strengthMap[score] || ""
    }));
  }, [required]);

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    checkPasswordStrength(value);
    onChange?.(e);
  }, [onChange, checkPasswordStrength]);

  const strengthStyles = {
    error: "text-red-500",
    weak: "text-red-500",
    medium: "text-yellow-500",
    strong: "text-green-500",
    "very strong": "text-blue-500"
  };

  const getMessage = () => {
    if (error) return error;
    if (state.strength === "error" && required) return "Password is required";
    if (state.strength) return `Password strength: ${state.strength}`;
    return "";
  };

  return (
    <div className="space-y-1">
      <DevInputV1
        rounded="md"
        size="md"
        {...props}
        type={state.hide ? "password" : "text"}
        labelName="Password"
        reverseIcon
        required={required}
        icon={
          <span
            className="cursor-pointer text-xl"
            onClick={() => setState(prev => ({ ...prev, hide: !prev.hide }))}
          >
            {state.hide ? <VscEye /> : <VscEyeClosed />}
          </span>
        }
        onChange={handleInputChange}
      />
      {getMessage() && (
        <p className={`text-sm ${strengthStyles[state.strength] || 'text-red-500'}`}>
          {getMessage()}
        </p>
      )}
    </div>
  );
};

export default DevPasswordInput;