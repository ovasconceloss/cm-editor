import React, { createContext, useState, useEffect, useContext } from "react";

type DatabaseContextType = {
  databaseName: string | null;
  setDatabaseName: (name: string | null) => void;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export const DatabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [databaseName, setDatabaseName] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("database_name");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setDatabaseName(parsed || parsed);
      } catch (err: unknown) {
        setDatabaseName(null);
      }
    }
  }, []);

  return (
    <DatabaseContext.Provider value={{ databaseName, setDatabaseName }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) throw new Error("useDatabase must be used within a DatabaseProvider");
  
  return context;
}