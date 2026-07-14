// src/app/api/doctors/sync/route.js

import connectDB from "@/lib/mongodb";
import Doctor from "@/models/Doctor";

export async function POST(req) {
  await connectDB();

  const { firebaseUid, email, name, firstName, lastName } = await req.json();

  let doctor = await Doctor.findOne({ firebaseUid });

  if (!doctor) {
    // Handle fallback if `name` is provided (e.g. from Google Login which gives a display name)
    let finalFirstName = firstName || "";
    let finalLastName = lastName || "";
    
    if (name && !firstName && !lastName) {
      const parts = name.split(" ");
      finalFirstName = parts[0];
      finalLastName = parts.slice(1).join(" ");
    }

    doctor = await Doctor.create({
      firebaseUid,
      email,
      firstName: finalFirstName,
      lastName: finalLastName,
    });
  }

  return Response.json(doctor);
}