import { createContext } from "react";

interface GlobalContextType {
  language: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
