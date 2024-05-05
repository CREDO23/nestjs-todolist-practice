export interface PasswordServiceInterface {
  hash(data: string): Promise<string> | string;
  compare(value: string, hash: string): Promise<boolean>;
}
