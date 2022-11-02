import { IsEmail, IsString } from "class-validator";

export class SearchUserDto {
  @IsString({ message: "Use to be String" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;
}
