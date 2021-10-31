export interface jwtDecodeUser {
  authenticated: boolean;
  exp: string;
  iat: string;
  id: number;
  role: string[];
  sub: string;
}
