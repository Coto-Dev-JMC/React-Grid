import useTimer from "../../context/useTimer.jsx";
import style from "./Timer.module.css";
const Pause = () => {
  const { setPlay } = useTimer();

  return (
    <button
      className={style.buttonPause}
      type="button"
      onClick={() => setPlay(false)}
    >
      Pause!
    </button>
  );
};

export default Pause;
