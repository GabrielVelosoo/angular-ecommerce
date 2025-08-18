export interface Token {
  sub?: string;
  email?: string;
  authorities?: string[];
  [key: string]: any;
}
