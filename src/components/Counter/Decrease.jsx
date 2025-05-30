import useCounter from "../../context/useCounter.jsx";
import style from "./Counter.module.css";
const Decrease = () => {
  const { count, setCount } = useCounter();
  return (
    <>
      <button
        className={`${style.button} ${style.decrease}`}
        type="button"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </>
  );
};

export default Decrease;
