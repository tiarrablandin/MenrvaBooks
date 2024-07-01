'use server';

import { url } from "@/providers/coreProviders";
import { sendPasswordResetEmail } from "./sendPasswordResetEmail";

export async function requestPasswordReset(identifier: string) {
  const res = await fetch(`${url}/api/users/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier })
  });

  if (!res.ok) {
    return { message: 'User not found or failed to generate reset token' };
  }

  const data = await res.json();
  const token = data.token;

  await sendPasswordResetEmail(identifier, token);

  console.log("#############" + 'Password reset email has been sent.')

  return { message: 'Password reset email has been sent.' };
}