import React, { useContext } from "react";

export type ErrorMessage = {
  message: string;
  description?: string;
};

const ErrorContext = React.createContext<{
  error: ErrorMessage;
  setErrorMessage: (message: string, description?: string) => void;
}>({ error: { message: "" }, setErrorMessage: () => {} });

export const ErrorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [error, setError] = React.useState<ErrorMessage>({ message: "" });

  const setErrorMessage = (message: string, description?: string) => {
    setError({ message, description });
  };

  return (
    <ErrorContext.Provider value={{ error, setErrorMessage }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
