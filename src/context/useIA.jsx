import { useContext, createContext, useState} from "react";

const IA = createContext(null);

export const IAProvider = ({ children }) => {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  return (
    <IA.Provider value={{ url, description, setUrl, setDescription }}>
      {children}
    </IA.Provider>
  );
};

const useIA = () => useContext(IA);

export default useIA;
