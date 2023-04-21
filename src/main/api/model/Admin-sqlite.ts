import { DataTypes } from 'sequelize';
import { sequelize } from '../servers/sqlite-sequelize';

export type IAdmin={
  username:string;
  password:string;
  admin_id:string;
}

export const Admin = sequelize.define(
  'Admins',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
  }
);

