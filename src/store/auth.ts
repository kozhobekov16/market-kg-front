"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {UserModel} from "@/models";

interface UserState {
  user: UserModel | null
  setUser: (arg: UserModel) => void;
  clearUser: () => void;
}

export const useAuthUser = create<UserState>()(
  persist(
    (set) => ({
      user: { UserId: null, PhoneNumber: null },
      setUser: (newUser) => set({ user: newUser }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user",
    }
  )
);