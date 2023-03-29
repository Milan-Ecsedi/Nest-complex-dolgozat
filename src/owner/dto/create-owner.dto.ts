import { IsNotEmpty,IsString,IsBoolean } from "class-validator";

export class CreateOwnerDto {
 
  
  @IsString()
  fullName: string;

  @IsBoolean()
  @IsNotEmpty()
  business: boolean;
}
