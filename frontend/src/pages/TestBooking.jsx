import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../http-common";

const TestBooking = ({ user = JSON.parse(localStorage.getItem("user")) }) => {
  const [formData, setFormData] = useState({
    disease: "",
    user_email: "",
  });
  const [selectedOption, setSelectedOption] = useState("You");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const getUserEmail = async (email) => {
    try {
      const userData = await http.get(`/user/getUserByEmail/${email}`);
      setEmail(userData.data.user.email);
    } catch (error) {
      console.error({ errorMessage: error });
    }
  };

  const handleFormChange = async (event) => {
    const { name, value } = event.target;

    if (name === "testFor") {
      setSelectedOption(value);
      if (value === "You") {
        setFormData((prev) => ({
          ...prev,
          user_email: user.email,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          user_email: "",
        }));
      }
    } else if (name === "user_email") {
      setEmail(value);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  console.log(formData.user_email);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (selectedOption === "Other") {
        // If the selected option is "Other", get the email from the API
        await getUserEmail(email);
        setFormData((prev) => ({
          ...prev,
          user_email: email,
        }));
      }

      const response = await http.post("/bktest/createBkTest", formData);
      navigate(`/patients/${user.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionsSelected = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-4/5 bg-teal-50">
      <form className="flex flex-col items-center rounded-lg shadow-md p-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
        <h1 className="text-center text-green-700 text-2xl mb-4">
          Test Booking
        </h1>

        <div className="flex flex-row p-1 w-4/5 justify-center border-t-2">
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
            name="user_email"
            className="border-b-2 border-gray-400 w-4/5 p-2 mb-4  focus:outline-none focus:border-green-700"
            placeholder="Search by Email..."
            onChange={handleFormChange}
          />
        )}

        <div className="flex flex-row w-4/5 p-1 mb-1 items-center border-t-2">
          <label htmlFor="testDate" className="font-bold w-1/3 mr-1">
            Test Date
          </label>
          <input
            className="border-b-2 border-gray-400 w-2/3 p-2 mb-4 focus:outline-none focus:border-green-700"
            required
            type="date"
            placeholder="Test Date"
            name="date"
            onChange={handleFormChange}
          />
        </div>

        <div className="flex flex-row w-4/5 p-1 mb-1 items-center border-t-2 border-b-2">
          <label htmlFor="testTime" className="font-bold w-1/3 mr-1">
            Test Time
          </label>
          <input
            className="border-b-2 border-gray-400 w-2/3 p-2 mb-4 focus:outline-none focus:border-green-700"
            required
            type="time"
            placeholder="Test Date"
            name="date"
            onChange={handleFormChange}
          />
        </div>
        <input
          className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700"
          required
          type="text"
          placeholder="Test For e.g Malaria"
          name="disease"
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
