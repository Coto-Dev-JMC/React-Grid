import useTimer from "../../context/useTimer.jsx";
import Clock from "./Clock.jsx";
import Pause from "./Pause.jsx";
import Play from "./Play.jsx";
import Restart from "./Restart.jsx";
import style from "./Timer.module.css";
const Timer = () => {
  const { play, time, setTime } = useTimer();

  const addFiveSecond = () => {
    return setTime(time + 5 * 1000);
  };
  const reduceFiveSecond = () => {
    if (time <= 0) return setTime(0);
    return setTime(time - 5 * 1000);
  };
  const reduceOneMinute = () => {
    if (time <= 0) return setTime(0);
    return setTime(time - 1 * 60 * 1000);
  };
  const addOneMinute = () => {
    return setTime(time + 1 * 60 * 1000);
  };

  return (
    <form className={style.timer}>
      <Clock />
      {!play && (
        <fieldset className={style.timerBotones}>
          <button
            className={`${style.button} ${style.addSeconds}`}
            type="button"
            onClick={addFiveSecond}
          >
            +5 segs
          </button>

          <button
            className={`${style.button} ${style.reduceSeconds}`}
            type="button"
            onClick={reduceFiveSecond}
          >
            -5 segs
          </button>
          <button
            className={`${style.button} ${style.addMinute}`}
            type="button"
            onClick={addOneMinute}
          >
            +1 min
          </button>
          <button
            className={`${style.button} ${style.reduceMinute}`}
            type="button"
            onClick={reduceOneMinute}
          >
            -1 min
          </button>
        </fieldset>
      )}

      <div className={style.BottomButtonsContainer}>
        {time > 0 && !play && <Play />}
        {play && <Pause />}
        {time > 0 && play && <Restart />}
      </div>
    </form>
  );
};

export default Timer;
