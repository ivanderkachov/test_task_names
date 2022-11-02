import { IsEmail, IsString, Length } from "class-validator"


export class CreateUserDto {
  @IsString({ message: "Use to be String" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;
  @IsString({ message: "Use to be String" })
  @Length(4, 16, {
    message: "Password shouldn't be less then 4 and more then 16 symbols",
  })
  readonly password: string;
}