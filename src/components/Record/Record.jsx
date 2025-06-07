import React from "react";
import Listener from "./Listener.jsx";
import Gift from "./Gift.jsx";
import style from "./Record.module.css";
const Record = () => {
  return (
    <section id={style.record}>
      <Gift />
      <Listener />
    </section>
  );
};

export default Record;
