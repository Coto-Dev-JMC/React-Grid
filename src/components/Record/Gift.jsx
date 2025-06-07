import { useState, useEffect } from "react";
import useRecord from "../../context/useRecord.jsx";
import style from "./Gift.module.css";

const Gift = () => {
  const { transcript } = useRecord();
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!transcript || transcript.trim().length < 5) return;
    const loadGiphy = async () => {
      setUrl(null);
      setLoading(true);
      try {
        const endpoint = "https://api.giphy.com/v1/gifs/search";
        const params = {
          api_key: import.meta.env.VITE_GIPHY_KEY,
          q: transcript,
          limit: 1,
          lang: "es",
          rating: "pg",
        };
        const urlParams = new URLSearchParams(params);
        const res = await fetch(`${endpoint}?${urlParams.toString()}`);
        const { data } = await res.json();
        const [element] = data;
        setUrl(element.images.looping.mp4);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 2500);
      }
    };

    loadGiphy();
  }, [transcript]);

  return (
    <>
      {loading && <span className={`${style.loader} ${style.loading}`}></span>}
      {url && !loading && (
        <picture className={`${style.result}`}>
          <video autoPlay loop src={url} />
        </picture>
      )}
    </>
  );
};

export default Gift;
