import useRecord from "../../context/useRecord";
import { useEffect, useRef } from "react";
import style from "./Listener.module.css";
//escuchador
const Listener = () => {
  const {
    isListening,
    transcript,
    setIsListening,
    setTranscript,
    allow,
    setAllow,
  } = useRecord();

  const speaker = useRef(null);
  useEffect(() => {
    if (!allow) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Tu navegador no soporta Speech Recognition");
      return;
    }

    //captura lo que vamos hablando

    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      console.log(text);

      setTranscript(text);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Error:", event.error);
      setIsListening(false);
    };

    speaker.current = recognition;
  }, [allow]);

  //pido permiso al navegador para usar mic

  const pedirPermiso = async () => {
    try {
      const constraints = { audio: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setAllow(true);
      console.log("Permiso concedido:", stream);
    } catch (error) {
      setAllow(false);
      console.error("Error al obtener acceso al micrófono:", error);
    }
  };

  const startListening = () => {
    if (speaker.current) {
      if (!isListening) {
        setTranscript("");
        setIsListening(true);
        return speaker.current.start();
      }
      setIsListening(false);
      return speaker.current.stop();
    }
  };
  return (
    <form>
      {!allow && (
        <button
          type="button"
          className={`${style.buttonActive}`}
          onClick={pedirPermiso}
        >
          Activar Microfono
        </button>
      )}

      {allow && (
        <>
          <button
            type="button"
            className={`${!isListening ? style.buttonTalk : style.buttonStop}`}
            onClick={startListening}
          >
            {isListening ? "Parar" : "Hablar"}
          </button>
          {!transcript && (
            <p className={`${style.output}`}>
              <strong>Dime una frase y te dare un gift</strong>
            </p>
          )}
        </>
      )}

      {allow && transcript && (
        <p className={`${style.output}`}>
          <strong>Frase detectada:</strong> {transcript}
        </p>
      )}
    </form>
  );
};

export default Listener;
