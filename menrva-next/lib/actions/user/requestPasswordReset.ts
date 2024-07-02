'use server';

import { fetchUserByTag } from "@/lib/services/apiService";
import { sendPasswordResetEmail } from "./sendPasswordResetEmail";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${baseUrl}/api`;

export async function requestPasswordReset(identifier: string) {
  const res = await fetch(`${url}/users/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier })
  });

  if (!res.ok) {
    return { message: 'User not found or failed to generate reset token' };
  }

  const {message, token} = await res.json();
  const user = await fetchUserByTag(identifier)
  console.log("##################################" + token)

  await sendPasswordResetEmail(identifier, token);

  console.log("#############" + 'Password reset email has been sent.')

  return { message: 'Password reset email has been sent.' };
}