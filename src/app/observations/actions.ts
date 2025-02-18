"use server";
import sequelize from "@/database/connection";
import { BirdObservationModel } from "@/models/birdObservationModel";

export const getBirdObservations = async () => {
  try {
    console.log("Fetching bird observations");
    if (process.env.NODE_ENV === "production") {
      await sequelize.authenticate();
    }
    const observations = await BirdObservationModel.findAll();
    console.log("Fetched bird observations:", observations);
    return observations;
  } catch (error) {
    console.error("Error fetching bird observations:", error);
    return [];
  }
};
