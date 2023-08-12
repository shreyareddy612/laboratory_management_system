import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../http-common";

const TestBooking = () => {
  const [formData, setFormData] = useState({
    disease: "",
    user_email: "",
  });
  const [selectedOption, setSelectedOption] = useState("You");

  const navigate = useNavigate();

  const handleFormChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOptionsSelected = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await http.post("/bktest/createBkTest", formData);
      navigate("/report");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-4/5 bg-teal-50">
      <form className="flex flex-col items-center rounded-lg shadow-md p-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="text-center text-green-700 text-2xl mb-4">
          Test Booking
        </h1>

        <div className="flex-col p-1">
          <span class="text-black font-bold pr-2">Book Test For:</span>
          <label>
            <input
              className="p-1"
              type="radio"
              name="testFor"
              value="You"
              checked={selectedOption === "You"}
              onChange={handleOptionsSelected}
            />
            You
          </label>
          <label>
            <input
              className="p-1"
              type="radio"
              name="testFor"
              value="Other"
              checked={selectedOption === "Other"}
              onChange={handleOptionsSelected}
            />
            Other
          </label>
        </div>

        <hr></hr>
        {selectedOption === "Other" && (
          <input
            type="text"
            name="choice"
            className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700"
            placeholder="Full Name or Email..."
          />
        )}

        <input
          className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700"
          required
          type="text"
          placeholder="Test For e.g Malaria"
          name="disease"
          onChange={handleFormChange}
        />

        <input
          className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700"
          required
          type="text"
          placeholder="Email Address"
          name="user_email"
          onChange={handleFormChange}
        />

        <button
          className="bg-green-700 hover:bg-green-600 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline w-4/5 mb-4"
          type="submit"
          onClick={handleSubmit}
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default TestBooking;
