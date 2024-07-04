'use server';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${baseUrl}/api`;

export async function resetPassword(token: string, newPassword: string) {
  const res = await fetch(`${url}/users/password-reset`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, newPassword }),
  });

  if (!res.ok) {
    return { message: 'Invalid or expired token' };
  }

  const data = await res.json();

  console.log(data.message)

  return { message: data.message };
}