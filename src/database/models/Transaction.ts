import { Model, Sequelize, DataTypes } from 'sequelize';
import User from './User';
import { TransactionAttributes } from "../attributes";
import TransactionDetail from './TransactionDetail';

class Transaction extends Model implements TransactionAttributes {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public type!: string;
  public description!: string;
  public date!: Date;
  public userId!: number;

  public static associate(): void {
    // Define associations
    Transaction.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    Transaction.hasOne(TransactionDetail)
  }

  static initModel(sequelize: Sequelize): void {
    Transaction.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'Transaction',
      }
    );
  }
}

export default Transaction;
