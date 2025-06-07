import useTimer from "../../context/useTimer.jsx";
import style from "./Timer.module.css";
const Restart = () => {
  const { time, setCurrentTime, setPlay } = useTimer();
  const handler = () => {
    setCurrentTime(time);
    setPlay(false);
  };
  return (
    <button className={style.buttonRestart} type="button" onClick={handler}>
      Restart
    </button>
  );
};

export default Restart;
