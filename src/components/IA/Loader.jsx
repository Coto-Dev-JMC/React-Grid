import style from "./Loader.module.css";

const Loader = () => {
  return <span className={`${style.loader} ${style.loading}`}></span>;
};

export default Loader;
