import { useState } from "react";

export const useLoginForm = () => {
  const [formData, setFormData] = useState({
    nid_bc_no: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateLoginForm = () => {
    let validationErrors = {};

    if (!formData.nid_bc_no) {
      validationErrors.nid_bc_no = "NID/Birth Certificate Number is required";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    }

    return validationErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const validationErrors = validateLoginForm();

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission here, e.g., validation, API calls, etc.
      console.log("Form data:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (e) => handleChange(e);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return {
    formData,
    errors,
    handleInputChange,
    handleFormSubmit,
  };
};
