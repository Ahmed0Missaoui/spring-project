import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

// Secret key for JWT signing (should be in environment variables)
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-should-be-at-least-32-chars'
);

export async function sign(payload: any): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24 * 7; // 7 days

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(JWT_SECRET);
}

export async function verify(token: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function getToken(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  if (!token) return null;
  return token;
}

export async function getUserFromToken(request: NextRequest) {
  const token = await getToken(request);
  if (!token) return null;
  
  const payload = await verify(token);
  return payload;
}

export function setAuthCookie(token: string) {
  cookies().set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export function removeAuthCookie() {
  cookies().delete('token');
}