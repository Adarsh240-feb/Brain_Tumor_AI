import mongoose from "mongoose";
import { patientSchema } from "./Patient";

const doctorSchema = new mongoose.Schema(
  {
    // 🔗 Firebase UID (MOST IMPORTANT)
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },

    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    hospitalName: {
      type: String,
    },

    specialization: {
      type: String,
      default: "Neurology",
    },

    phone: {
      type: String,
    },

    // optional profile image
    profilePic: {
      type: String,
    },

    // patients associated with this doctor
    patients: [patientSchema],
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.Doctor) {
  delete mongoose.models.Doctor;
}

export default mongoose.model("Doctor", doctorSchema);