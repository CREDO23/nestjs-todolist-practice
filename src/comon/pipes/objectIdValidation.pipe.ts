import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe
  implements PipeTransform<string | number, Types.ObjectId>
{
  transform(value: any) {
    try {
      return new Types.ObjectId(value);
    } catch (error) {
      throw new BadRequestException(`${value} is not a valid objectId`);
    }
  }
}
