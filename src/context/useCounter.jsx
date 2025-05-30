import { useContext, useState, createContext } from "react";

const contador = createContext(0);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <contador.Provider value={{ count, setCount }}>
      {children}
    </contador.Provider>
  );
};

const useCounter = () => useContext(contador);

export default useCounter;
