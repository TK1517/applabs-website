import React, { useState } from "react";
import "./SubmitIdeas.css"; 

const SubmitIdeas = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbxdi7HQU6EaG4KvcdJyVLSG08KnzbT9UCLxVuWNlLT-ckqk3qB9-9vBBv5yQnfx5emKKg/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Idea Submitted Successfully 🚀");

    setFormData({
      name: "",
      email: "",
      title: "",
      description: ""
    });
  };

  return (
    <section id="submit-section" className="submit-section">
      <h2>Submit Your Ideas</h2>

      <form onSubmit={handleSubmit} className="idea-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Idea Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Describe your idea..."
          value={formData.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Idea</button>
      </form>
    </section>
  );
};

export default SubmitIdeas;