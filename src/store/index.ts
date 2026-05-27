import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  user: any | null;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isSidebarOpen: false,
      toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      user: null,
      setUser: (user) => set({ user }),
      logout: () => {
        localStorage.removeItem("auth_token");
        set({ user: null });
      },
    }),
    {
      name: "app-storage",
    }
  )
);
