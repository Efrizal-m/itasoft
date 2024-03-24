import { Model, Sequelize, DataTypes } from 'sequelize';
import { UserAttributes } from '../attributes';
import Transaction from './Transaction';

export type UserCreationAttributes = UserAttributes;

class User extends Model implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  public static associations: {};

  static initModel(sequelize: Sequelize): void {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        role: {
          type: DataTypes.STRING
        }
      },
      {
        sequelize,
        underscored: true,
        tableName: 'Users'
      }
    );
  }

  static associateModel(): void {
    // Define associations
    User.hasMany(Transaction)
  }
}

export default User;
