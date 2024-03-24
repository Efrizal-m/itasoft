import SequelizeConnection from "../SequelizeConnection";
import User from "./User";
import MasterData from "./MasterData";
import Transaction from "./Transaction";
import TransactionDetail from "./TransactionDetail";

const sequelize = SequelizeConnection.getInstance();

// Initialize models
User.initModel(sequelize);
MasterData.initModel(sequelize);
Transaction.initModel(sequelize);
TransactionDetail.initModel(sequelize);

// Associate models
User.associateModel();
MasterData.associate()
Transaction.associate()
TransactionDetail.associate();

export const db = {
  sequelize,
  User,
  MasterData,
  Transaction,
  TransactionDetail
};

