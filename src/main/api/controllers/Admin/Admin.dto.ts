import { IsNotEmpty,IsString } from 'class-validator';

export class AdminDTO {
  @IsNotEmpty({ message: 'Informe o seu nome de usuário' })
  public username!: string;

  @IsNotEmpty({ message: 'Informe a sua senha' })
  public password!: string;
}
