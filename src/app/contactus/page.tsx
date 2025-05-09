"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const [form, setForm] = useState<FormFields>({ name: "", email: "", message: "" });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };

  const fields: (keyof FormFields)[] = ["name", "email", "message"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full text-white space-y-5"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        {fields.map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block mb-2 text-sm font-semibold">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === "message" ? (
              <textarea
                id={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder={`Your ${field}`}
              />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder={`Your ${field}`}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
