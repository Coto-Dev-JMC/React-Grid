import { lazy, Suspense } from "react";
import useCounter from "../../context/useCounter.jsx";
const Increase = lazy(() => import("./Increase"));
const Decrease = lazy(() => import("./Decrease"));
import style from "./Counter.module.css";
const Counter = () => {
  const { count } = useCounter();
  return (
    <form id={style.counter}>
      <output id={style.count}>{count}</output>
      <Suspense fallback={null}>
        <Decrease />
      </Suspense>
      <Suspense fallback={null}>
        <Increase />
      </Suspense>
    </form>
  );
};
export default Counter;
