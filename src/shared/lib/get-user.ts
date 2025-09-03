'use server';

import {cookies} from 'next/headers';
import {UserModel} from "@/models";

export async function getAuthUser(): Promise<UserModel | null> {
  try {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get('user');
    if (!userCookie || !userCookie.value) {
      return null;
    }
    const userData: UserModel = JSON.parse(userCookie.value);
    if (userData && typeof userData === 'object' && 'UserId' in userData) {
      return userData;
    }
    return null;

  } catch (error) {
    console.error('Auth error:', error);
    return null;
  }
}