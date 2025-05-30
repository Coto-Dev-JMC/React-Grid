import { useState, useEffect } from "react";
import useRecord from "../../context/useRecord.jsx";
import style from "./Gift.module.css";

const Gift = () => {
  const { transcript } = useRecord();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    if (!transcript || transcript.trim().length < 5) return;
    const loadGiphy = async () => {
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
    };

    loadGiphy();
  }, [transcript]);

  if (!url) return;

  return (
    <picture>
      <video autoPlay loop src={url} />
    </picture>
  );
};

export default Gift;
