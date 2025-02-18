import { Sequelize } from "sequelize";
import {
  initializeBirdObservationModel,
  BirdObservationModel,
} from "../models/birdObservationModel";
import pg from "pg";

const sequelize = new Sequelize(process.env.DATABASE_URL ?? "", {
  dialect: "postgres",
  logging: false,
  dialectModule: pg,
});

initializeBirdObservationModel(sequelize);

export async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await BirdObservationModel.sync({ alter: true });
    console.log("BirdObservation table has been created or updated.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default sequelize;
