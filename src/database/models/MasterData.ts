import { Model, Sequelize, DataTypes } from 'sequelize';
import { MasterDataAttributes } from "../attributes";
import TransactionDetail from './TransactionDetail';

class MasterData extends Model implements MasterDataAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public description!: string;

  public static associate(): void {
    // define association here
    MasterData.hasMany(TransactionDetail)
  }

  static initModel(sequelize: Sequelize): void {
    MasterData.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'MasterData',
      }
    );
  }
}

export default MasterData;
