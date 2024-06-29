'use server';

import { cookies } from "next/headers";

export default async function setMenrvaTheme(theme: string) {
  try {
    cookies().set('theme', theme);
    return { successful: true };
  } catch (error) {
    console.error('Failed to set theme:', error);
    return { successfull: false };
  }
}