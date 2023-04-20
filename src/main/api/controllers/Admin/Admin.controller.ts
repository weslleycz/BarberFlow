import { Body, Controller, Post, Response } from '@decorators/express';
import { Response as IResponse } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { Admin as AdminModel,IAdmin } from '../../model/Admin-sqlite';
import { sequelize } from '../../servers/sqlite-sequelize';
import { process } from "../../env";
import { AdminDTO } from './Admin.dto';
import { sign } from 'jsonwebtoken';

@Controller('/admin')
export class Admin {
  @Post('/login', [makeValidateBody(AdminDTO)])
  public async login(@Response() res: IResponse, @Body() body: AdminDTO) {
    try {
      await sequelize.sync({ force: true });
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    const { username, password } = body;
    const admin =<IAdmin> <unknown>await AdminModel.findOne({
      where: {
        username,
      },
    });

    if (admin != null) {
      if (password === admin.password) {
        const token = sign({ id: admin.admin_id }, process.env.SecretJWT);
        return res.status(200).json({
          token:"",
        });
      } else {
        return res.status(400).json({
          message: 'Senha incorreta',
        });
      }
    } else {
      return res.status(400).json({
        message: 'Usuário não cadastrado entre em contato com o suporte',
      });
    }
  }
}
