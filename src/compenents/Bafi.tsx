import '/src/App.css'
import data from "../data.json"
import React, { useEffect, useRef, useState } from "react";
import bafiimg from '../assets/images/bafi.svg'
import bafiBubble from '../assets/images/bafiBubble.png'



function bafi (){

  let sentences = data["bafiSentences"];
  const [sentence, setSentence] = useState(sentences[Math.floor(Math.random()* sentences.length)]);
  const [bafiShow, setbafiShow] = useState(false);
  const bafishowref = useRef(false)
  useEffect(() => {
    const interval = setInterval(() => {
      bafishowref.current = !bafishowref.current;
      if (bafishowref.current) {
        setSentence(sentences[Math.floor(Math.random()* sentences.length)]);
      }
      setbafiShow(bafishowref.current);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

    return (
    <>
    { bafiShow &&
          <div>
      <img className="position-fixed bottom-0 bafi" style={{ }} src={bafiimg} alt="bafi"/>
      <img className="position-fixed bafi-buble" style={{}} src={bafiBubble} alt="bafi"/>
      <div className='position-fixed text-center d-flex justify-content-center align-items-center bafi-sentence' style={{}}>
          <span className="text-center position-relative" style={{width: "130px"}}>{sentence}</span>
      </div>
    </div>
    }
        </>);
}
export default bafi;