import { DataTypes, Model, Sequelize } from "sequelize";

// Sequelize model definition
export class BirdObservationModel extends Model {
  public id!: number;
  public birdName!: string;
  public latitude!: number;
  public longitude!: number;
  public age!: "young" | "adult";
}

export function initializeBirdObservationModel(sequelize: Sequelize) {
  BirdObservationModel.init(
    {
      birdName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      age: {
        type: DataTypes.ENUM("young", "adult"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BirdObservation",
      tableName: "bird_observations",
    }
  );
}
