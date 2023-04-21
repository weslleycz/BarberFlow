import { Body, Controller, Post, Response } from '@decorators/express';
import { Response as IResponse } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { sign } from 'jsonwebtoken';
import { process } from '../../env';
import { Admin as AdminModel, IAdmin } from '../../model/Admin-sqlite';
import { AdminDTO } from './Admin.dto';

@Controller('/admin')
export class Admin {
  @Post('/login', [makeValidateBody(AdminDTO)])
  public async login(@Response() res: IResponse, @Body() body: AdminDTO) {
    const { username, password } = body;
    const admin = <IAdmin>(<unknown>await AdminModel.findOne({
      where: {
        username,
      },
    }));
    if (admin != null) {
      if (password === admin.password) {
        const token = sign({ id: admin.admin_id }, process.env.SecretJWT);
        return res.status(200).json({
          token,
        });
      } else {
        return res.status(400).json({
          message: 'Senha incorreta. tente novamente',
        });
      }
    } else {
      return res.status(400).json({
        message: 'Usuário não cadastrado',
      });
    }
  }
  @Post('', [makeValidateBody(AdminDTO)])
  public async registry(@Response() res: IResponse, @Body() body: AdminDTO) {
    try {
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    const { username, password } = body;
    const admin = <IAdmin>(<unknown>await AdminModel.findOne({
      where: {
        username,
      },
    }));
    if (admin === null) {
      try {
        const newAdmin = AdminModel.build({
          username,
          password,
        });
        await newAdmin.save();
        return res.status(200).json({
          message: 'Administrador criado',
        });
      } catch (error) {
        return res.status(400).json({
          error,
        });
      }
    } else {
      return res.status(400).json({
        message: 'O usuário já possui cadastro',
      });
    }
  }
}
