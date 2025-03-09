// src/pages/DentistConsultationPage.js
import React from "react";
import DentistCard from "./DentistCard";



const dentists = [
  {
    id: 1,
    //profilePicture: "",
    name: "Dr. John Doe",
    designation: "Senior Dentist",
    qualifications: "BDS, MDS",
    yearsOfExperience: 10,
  },
  {
    id: 2,
   // profilePicture: "",
    name: "Dr. Jane Smith",
    designation: "Orthodontist",
    qualifications: "BDS, MDS, PhD",
    yearsOfExperience: 15,
  },
  // Add more dentists here
];

const DentistConsultationPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Meet Our Dentists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentists.map((dentist) => (
          <DentistCard key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  );
};

export default DentistConsultationPage;