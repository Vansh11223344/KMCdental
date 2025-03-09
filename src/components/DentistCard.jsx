// src/components/DentistCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const DentistCard = ({ dentist }) => {
  const navigate = useNavigate();

  const handleConsultNow = () => {
    navigate("/PaymentScreen", { state: { dentist } }); // Redirect to payment screen
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <img
        src={dentist.profilePicture}
        alt={dentist.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">{dentist.name}</h2>
      <p className="text-gray-600">{dentist.designation}</p>
      <p className="text-gray-600">{dentist.qualifications}</p>
      <p className="text-gray-600">{dentist.yearsOfExperience} years of experience</p>
      <button
        onClick={handleConsultNow}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Consult Now
      </button>
    </div>
  );
};

export default DentistCard;