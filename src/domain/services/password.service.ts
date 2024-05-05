import { Injectable } from '@nestjs/common';
import { PasswordServiceInterface } from './interfaces/passwordService';

@Injectable()
export class PasswordService implements PasswordServiceInterface {
  constructor(private passwordServiceProvider: PasswordServiceInterface) {}

  hash(data: string): string | Promise<string> {
    return this.passwordServiceProvider.hash(data);
  }

  compare(value: string, hash: string): Promise<boolean> {
    return this.passwordServiceProvider.compare(value, hash);
  }
}
