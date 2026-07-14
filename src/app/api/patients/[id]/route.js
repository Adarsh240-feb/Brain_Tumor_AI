import connectDB from "@/lib/mongodb";
import Patient from "@/models/Patient";
import Doctor from "@/models/Doctor";

export async function GET(request, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const patient = await Patient.findOne({ _id: id });

    if (!patient) {
      return Response.json(
        {
          success: false,
          error: "Patient not found",
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: patient,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
// api for delete patient details
export async function DELETE(request, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const patient = await Patient.findByIdAndDelete(id);

    if (!patient) {
      return Response.json(
        {
          success: false,
          error: "Patient not found",
        },
        { status: 404 }
      );
    }

    // Remove the patient from the Doctor's patients list
    await Doctor.findOneAndUpdate(
      { firebaseUid: patient.doctorId },
      { $pull: { patients: { _id: id } } }
    );

    return Response.json({
      success: true,
      message: "Patient deleted successfully",
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}