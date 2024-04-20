import { APP_KEYS, APP_KEYS_VALUES } from "@/utils/keys";
import { create } from "zustand";
import JsCookie from "js-cookie";

export type StoreAppType = {
  theme: "dark" | "light" | null;
  changeTheme: (theme: StoreAppType["theme"]) => void;
};

const useStoreApp = create<StoreAppType>((set) => ({
  theme: null,
  changeTheme: (theme: StoreAppType["theme"]) => {
    set({ theme });
  },
}));

export default useStoreApp;
