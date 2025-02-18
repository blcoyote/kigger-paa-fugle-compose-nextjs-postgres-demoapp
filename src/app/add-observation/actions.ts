"use server";
import { BirdObservationModel } from "@/models/birdObservationModel";
import sequelize from "@/database/connection";

interface ObservationData {
  birdName: string;
  latitude: string;
  longitude: string;
  age: "young" | "adult";
}

export const handleFormSubmit = async (formData: ObservationData) => {
  try {
    await sequelize.authenticate();
    await BirdObservationModel.create({
      birdName: formData.birdName,
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
      age: formData.age,
    });
    return { success: true, formData };
  } catch (error) {
    console.error("Error saving observation:", error);
    return { success: false, error };
  }
};
