import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

// Define attributes
interface ProjectAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields when creating
interface ProjectCreationAttributes extends Optional<ProjectAttributes, 'id'> {}

class Project extends Model<ProjectAttributes, ProjectCreationAttributes>
  implements ProjectAttributes {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Project'
  }
);

export default Project;
