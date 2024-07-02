'use server';

import { url } from '@/providers/coreProviders';
import { cookies } from 'next/headers';

export async function changePassword(oldPassword: string, newPassword: string) {
  const jwt = cookies().get('jwt');

  const res = await fetch(`${url}/users/change-password`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
    body: JSON.stringify({ oldPassword, newPassword }),
  });

  if (!res.ok) {
    return { message: 'Failed to change password' };
  }

  const data = await res.json();

  console.log("**********" + data.message)

  return { message: data.message };
}