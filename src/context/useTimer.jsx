import { useContext, useState, createContext } from "react";

const timer = createContext(null);

export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  return (
    <timer.Provider
      value={{ time, play, currentTime, setTime, setPlay, setCurrentTime }}
    >
      {children}
    </timer.Provider>
  );
};

const useTimer = () => useContext(timer);

export default useTimer;
