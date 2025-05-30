import useCounter from "../../context/useCounter.jsx";
import style from "./Counter.module.css";
const Increase = () => {
  const { count, setCount } = useCounter();
  return (
    <>
      <button
        className={`${style.button} ${style.increase}`}
        type="button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </>
  );
};

export default Increase;
