import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import Project from './project';

// Define Apartment attributes
interface ApartmentAttributes {
  id: number;
  title: string;
  description: string;
  price: number;
  bedrooms?: number;
  bathrooms?: number;
  square_feet?: number;
  has_parking?: boolean;
  has_elevator?: boolean;
  has_balcony?: boolean;
  address?: string;
  lat?: number;
  lng?: number;
  projectId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields for creation
interface ApartmentCreationAttributes extends Optional<ApartmentAttributes, 'id'> {}

class Apartment extends Model<ApartmentAttributes, ApartmentCreationAttributes> implements ApartmentAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public price!: number;
  public bedrooms?: number;
  public bathrooms?: number;
  public square_feet?: number;
  public has_parking?: boolean;
  public has_elevator?: boolean;
  public has_balcony?: boolean;
  public address?: string;
  public lat?: number;
  public lng?: number;
  public projectId?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Apartment.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  bedrooms: DataTypes.INTEGER,
  bathrooms: DataTypes.INTEGER,
  square_feet: DataTypes.FLOAT,
  has_parking: DataTypes.BOOLEAN,
  has_elevator: DataTypes.BOOLEAN,
  has_balcony: DataTypes.BOOLEAN,
  address: DataTypes.STRING,
  lat: DataTypes.FLOAT,
  lng: DataTypes.FLOAT,
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Projects',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Apartment'
});

Apartment.belongsTo(Project, { foreignKey: 'projectId' });
Project.hasMany(Apartment, { foreignKey: 'projectId' });

export default Apartment;
