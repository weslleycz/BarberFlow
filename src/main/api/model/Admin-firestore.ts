import { sequelize } from '../servers/firestore-sequelize';

export const Admin = sequelize.defineModel('Admins', {
  username: {
    type: sequelize.DataTypes.STRING,
    required: true,
    unique: true
  },
  password: {
    type: sequelize.DataTypes.STRING,
    required: true,
  },
});
