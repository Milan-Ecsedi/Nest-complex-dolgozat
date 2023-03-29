import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Owner } from "src/owner/entities/owner.entity";

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  accountNumber: string;
 
  @IsNotEmpty()
  @IsNumber()
  balance: number;

  @IsNotEmpty()
  ownerId: number;
}
