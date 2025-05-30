import { createContext, useContext, useState } from "react";

const Record = createContext(null);

export const RecordProvider = ({ children }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [allow, setAllow] = useState(false);
  return (
    <Record.Provider
      value={{
        isListening,
        transcript,
        setIsListening,
        setTranscript,
        allow,
        setAllow,
      }}
    >
      {children}
    </Record.Provider>
  );
};

const useRecord = () => useContext(Record);

export default useRecord;
