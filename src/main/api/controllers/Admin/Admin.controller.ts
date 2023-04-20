import { Body, Controller, Post, Response } from '@decorators/express';
import { Response as IResponse } from 'express';
import { makeValidateBody } from 'express-class-validator';
import { sign } from 'jsonwebtoken';
import { process } from '../../env';
import { Admin as AdminModel } from '../../model/Admin';
import { AdminDTO } from './Admin.dto';

@Controller('/admin')
export class Admin {
  @Post('/login', [makeValidateBody(AdminDTO)])
  public async login(@Response() res: IResponse, @Body() body: AdminDTO) {
    const { username, password } = body;
    const admin = await AdminModel.findOne({
      where: {
        username,
      },
    });
    if (admin != null) {
      if (password === admin.password) {
        const token = sign({ id: admin.getId() }, process.env.SecretJWT);
        return res.status(200).json({
          token,
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
