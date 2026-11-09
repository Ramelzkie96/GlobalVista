import { useState } from "react";

const initialValues = { name: "", email: "", subject: "", message: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }

  return errors;
}

// Replace this function when you connect a real service (EmailJS, Formspree, your API).
// It must resolve when the message was sent and throw if it failed.
async function sendMessage(values) {
  console.log("Contact form submitted:", values);
  await new Promise((resolve) => setTimeout(resolve, 1200));
}

export default function useContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear the error for this field and any old success/error banner
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "success" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    try {
      setStatus("sending");
      await sendMessage(values);
      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return { values, errors, status, handleChange, handleSubmit };
}