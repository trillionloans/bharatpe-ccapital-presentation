import { create } from "zustand";

export type ExperienceId =
  | "home"
  | "merchant-universe"
  | "decision-flow"
  | "risk-engine"
  | "architecture"
  | "showcase"
  | "build-loan"
  | "metrics"
  | "innovation-wall";

interface AppState {
  active: ExperienceId;
  setActive: (id: ExperienceId) => void;
  goHome: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  active: "home",
  setActive: (id) => set({ active: id }),
  goHome: () => set({ active: "home" }),
}));
