import useTimer from "../../context/useTimer.jsx";
import style from "./Timer.module.css";
const Play = () => {
  const { setPlay } = useTimer();

  return (
    <button
      className={style.buttonPlay}
      type="button"
      onClick={() => setPlay(true)}
    >
      Play
    </button>
  );
};

export default Play;
