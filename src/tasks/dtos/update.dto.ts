import { IsOptional } from 'class-validator';

export class UpdateDTO {
  @IsOptional()
  title: string;

  @IsOptional()
  body: string;

  @IsOptional()
  done: boolean;
}
