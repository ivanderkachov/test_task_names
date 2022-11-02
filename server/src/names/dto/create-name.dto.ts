import { IsNumber, IsString } from "class-validator";

export class CreateNameDto {
  @IsString({message: "Use to be String"})
  readonly name: string;
  @IsNumber({}, {message: "Use to be Number"})
  readonly rank: number;
}
