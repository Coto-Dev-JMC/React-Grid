import { useEffect } from "react";
import useTimer from "../../context/useTimer.jsx";
import style from "./Timer.module.css";
const Clock = () => {
  const { time, currentTime, setCurrentTime, play } = useTimer();
  useEffect(() => {
    setCurrentTime(time);
  }, [time]);

  useEffect(() => {
    let interval;

    if (play) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1000);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [play]);

  const minutes = Math.floor(currentTime / 1000 / 60);
  const seconds = Math.floor((currentTime / 1000) % 60);

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return (
    <output id={style.clock}>
      {formattedMinutes}:{formattedSeconds}
    </output>
  );
};

export default Clock;
