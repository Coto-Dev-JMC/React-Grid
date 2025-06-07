import style from "./Prompt.module.css";
import { useState, useEffect, useRef } from "react";
import useIA from "../../context/useIA.jsx";
import Loader from "./Loader.jsx";
const Prompt = () => {
  const { setUrl, setDescription, url, description } = useIA();
  const [isFeching, setIsFeching] = useState(false);
  const inputDescription = useRef(null);
  const validateDescription = (data = "") => {
    let cantidadMinima = data.length > 5;
    let cantidadMaxima = data.length < 50;
    return cantidadMinima && cantidadMaxima;
  };

  useEffect(() => {
    if (!validateDescription(inputDescription.current.value.trim())) return;

    const load = async () => {
      setUrl("");
      const endpoint = "https://api-inference.huggingface.co/models/";
      const model = "stabilityai/stable-diffusion-xl-base-1.0";
      const options = {};
      options.method = "POST";
      options.headers = {};
      options.headers.Authorization = `Bearer ${
        import.meta.env.VITE_HUGGING_KEY
      }`;
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify({
        inputs: description,
      });
      const res = await fetch(`${endpoint}${model}`, options);
      const data = await res.blob();
      setUrl(URL.createObjectURL(data));
      setIsFeching(false);
    };
    if (isFeching) {
      load();
    }
  }, [description, isFeching]);

  return (
    <>
      {isFeching && <Loader />}
      {url && url.length > 10 && (
        <picture className={style.imgCreada}>
          <img src={url} alt="" />
        </picture>
      )}

      <form
        id={style.form}
        onSubmit={(e) => {
          e.preventDefault();
          setIsFeching(true);
        }}
      >
        <input
          type="text"
          ref={inputDescription}
          onInput={(e) =>
            validateDescription(e.target.value.trim())
              ? setDescription(e.target.value.trim())
              : null
          }
          placeholder="Prompt para crear imagen..."
          disabled={isFeching}
        />

        <button disabled={isFeching}>Enviar</button>
      </form>
    </>
  );
};

export default Prompt;
