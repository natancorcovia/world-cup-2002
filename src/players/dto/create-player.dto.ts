import { IsInt, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  name: string;

  @IsInt()
  number: number;

  @IsString()
  position: string;

  @IsInt()
  goals: number;

  @IsInt()
  assists: number;
}
