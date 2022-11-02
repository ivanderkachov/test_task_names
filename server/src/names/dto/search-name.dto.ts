import { IsNumber, IsString } from "class-validator";

export class SearchNameDto {
  @IsString({ message: "Use to be String" })
  readonly name: string;
}
