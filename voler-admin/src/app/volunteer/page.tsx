"use client";
import { useState } from "react";
import { VolunteerProfile } from "@prisma/client"; // Import your Prisma client
import { GetServerSideProps } from "next";

const VolunteerForm = () => {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [certifications, setCertifications] = useState("");
  const [availability, setAvailability] = useState("");

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const volunteerData = {
      name,
      email,
      phoneNumber,
      skills: skills.split(","), // Convert skills into an array
      certifications: certifications.split(","), // Convert certifications into an array
      availability,
    };

    try {
      const response = await fetch("/api/volunteer/route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(volunteerData),
      });

      if (response.ok) {
        alert("Volunteer details successfully submitted!");
      } else {
        alert("Failed to submit details");
      }
    } catch (error) {
      console.error("Error submitting details:", error);
    }
  };

  return (
    <div>
      <h1>Volunteer Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Skills (comma separated):</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>

        <div>
          <label>Certifications (comma separated):</label>
          <input
            type="text"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
          />
        </div>

        <div>
          <label>Availability:</label>
          <input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
