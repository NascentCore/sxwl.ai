import en from "@/locales/en";
import zh from "@/locales/zh";
import { createContext, useContext, ReactNode, useState } from "react";

const AppContext = createContext<any>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("zh");
  const [t, setT] = useState(zh);

  const sharedData = {
    t: { zh, en }[language],
    language,
    setLanguage,
  };

  return (
    <AppContext.Provider value={sharedData}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
