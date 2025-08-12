import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret-key';

export function signJWT(payload: JwtPayload, expiresIn: SignOptions['expiresIn'] = '1d'): string {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, SECRET, options);
}

export function verifyJWT(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, SECRET) as JwtPayload;
  } catch {
    return null;
  }
}
