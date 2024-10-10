"use client";
import { useEffect, useState } from "react";
import { VolunteerProfile } from "@prisma/client"; // Import your Prisma client
import StarRating from "../../../components/StarRating"; // Adjust the import path accordingly

const VolunteerDetails = () => {
  const [volunteers, setVolunteers] = useState<VolunteerProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await fetch("/api/volunteer/route");
        if (!response.ok) {
          throw new Error("Failed to fetch volunteer details");
        }
        const data = await response.json();
        setVolunteers(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  const handleRatingChange = (volunteerId: number, newRating: number) => {
    setVolunteers((prevVolunteers) =>
      prevVolunteers.map((volunteer) =>
        volunteer.id === volunteerId
          ? { ...volunteer, ratings: newRating }
          : volunteer
      )
    );

    // Optionally, you can send the updated rating to your backend here
    // await updateVolunteerRating(volunteerId, newRating);
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Volunteer Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {volunteers.map((volunteer) => (
          <div
            key={volunteer.id}
            className="bg-white rounded-lg shadow-lg border-2 border-gray-300 p-4 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold">{volunteer.name}</h2>
            <p className="text-gray-600">Email: {volunteer.email}</p>
            <p className="text-gray-600">
              Phone Number: {volunteer.phoneNumber}
            </p>
            <p className="text-gray-600">
              Skills: {volunteer.skills.join(", ")}
            </p>
            <p className="text-gray-600">
              Certifications: {volunteer.certifications.join(", ") || "None"}
            </p>
            <p className="text-gray-600">
              Availability: {volunteer.availability}
            </p>
            <div className="flex items-center">
              <StarRating
                rating={volunteer.ratings ? Math.round(volunteer.ratings) : 0}
                onRatingChange={(newRating) =>
                  handleRatingChange(volunteer.id, newRating)
                }
              />
              <span className="ml-2 text-gray-600">
                {volunteer.ratings?.toFixed(1) || "N/A"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerDetails;
