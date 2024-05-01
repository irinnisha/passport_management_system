import { useState } from "react";

// Custom hook for form validation
export const useLoginForm = () => {
  const [formData, setFormData] = useState({
    nid_bc_no: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Function to validate form data
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate NID/Birth Certificate Number
    if (!formData.nid_bc_no.trim()) {
      newErrors.nid_bc_no = "NID/Birth Certificate Number is required";
      isValid = false;
    }

    // Validate Password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return { formData, errors, handleInputChange, validateForm };
};
