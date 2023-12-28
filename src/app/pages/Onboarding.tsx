"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Onboarding = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [interests, setInterests] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOccupationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOccupation(e.target.value);
  };

  const handleInterestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterests(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Onboarding</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <Input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Age:
          <Input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <label>
          Email:
          <Input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Occupation:
          <Input
            type="text"
            value={occupation}
            onChange={handleOccupationChange}
          />
        </label>
        <br />
        <label>
          Interests:
          <input
            type="text"
            value={interests}
            onChange={handleInterestsChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Onboarding;
