import { Model, Sequelize, DataTypes } from 'sequelize';
import MasterData from './MasterData';
import Transaction from './Transaction';
import { TransactionDetailAttributes } from "../attributes";

class TransactionDetail extends Model implements TransactionDetailAttributes {
  public transactionId!: number;
  public masterDataId!: number;
  public quantity!: number;
  public price!: number;

  public static associate(): void {
    // define association here
    TransactionDetail.belongsTo(Transaction, { foreignKey: 'transactionId', as: 'transaction' });
    TransactionDetail.belongsTo(MasterData, { foreignKey: 'masterDataId', as: 'masterData' });
  }

  static initModel(sequelize: Sequelize): void {
    TransactionDetail.init(
      {
        transactionId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        masterDataId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        price: {
          type: DataTypes.DECIMAL,
          allowNull: false
        }
      },
      {
        sequelize,
        modelName: 'TransactionDetail',
      }
    );
  }
}

export default TransactionDetail;
