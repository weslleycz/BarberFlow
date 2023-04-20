import { app } from '../../main';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `/${app.getPath('appData')}/db.sqlite`,
});

export { sequelize };
