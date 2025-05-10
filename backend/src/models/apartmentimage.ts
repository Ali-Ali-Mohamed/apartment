import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import Apartment from './apartment';

interface ApartmentImageAttributes {
  id: number;
  image: string;
  apartmentId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ApartmentImageCreationAttributes extends Optional<ApartmentImageAttributes, 'id'> {}

class ApartmentImage extends Model<ApartmentImageAttributes, ApartmentImageCreationAttributes>
  implements ApartmentImageAttributes {
  public id!: number;
  public image!: string;
  public apartmentId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ApartmentImage.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    image: DataTypes.STRING,
    apartmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Apartments',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    }
  },
  {
    sequelize,
    modelName: 'ApartmentImage'
  }
);

Apartment.hasMany(ApartmentImage, { foreignKey: 'apartmentId' });
ApartmentImage.belongsTo(Apartment, { foreignKey: 'apartmentId' });

export default ApartmentImage;
