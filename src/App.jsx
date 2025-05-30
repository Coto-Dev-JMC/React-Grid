import Counter from "./components/counter/Counter.jsx";
import Timer from "./components/Temp/Timer.jsx";
import Record from "./components/Record/Record.jsx";
import Ia from "./components/IA/Ia.jsx";
import { CounterProvider } from "./context/useCounter.jsx";
import { RecordProvider } from "./context/useRecord.jsx";
import { TimerProvider } from "./context/useTimer.jsx";
import { IAProvider } from "./context/useIA.jsx";

const App = () => {
  return (
    <>
      <CounterProvider>
        <Counter />
      </CounterProvider>

      <TimerProvider>
        <Timer />
      </TimerProvider>

      <RecordProvider>
        <Record />
      </RecordProvider>

      <IAProvider>
        <Ia />
      </IAProvider>
    </>
  );
};

export default App;
