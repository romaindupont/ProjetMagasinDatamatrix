import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LabelPdf from './LabelPdf';

const bwipjs = require('bwip-js');

const FlashMode = () => {
  const [input, setInput] = useState('exemple');
  const [src, setImageSrc] = useState('');
  const [ref, setInputRef] = useState('');
  const [manitouRef, setManitouRef] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const clicButton = () => {
    LabelPdf(src, ref, manitouRef);
  };
  useEffect(() => {
    const canvas = document.createElement('canvas');
    bwipjs.toCanvas(canvas, {
      bcid: 'datamatrix',
      text: input,
      scale: 4,
      height: 10,
      includetext: true,
      textxalign: 'center',
    });
    setInputRef(input.substring(26, 34));
    setManitouRef(input.substring(17, 25));
    setImageSrc(canvas.toDataURL('image/png'));
  }, [input, src]);
  return (
    <div className="flashMode">
      <Link to="/" rel="noreferrer" className="backMenu">
        <p>Menu</p>
      </Link>
      <input
        id="inputField"
        type="text"
        style={{ textAlign: 'center' }}
        value={input}
        onChange={onChangeInput}
        onFocus={(e) => e.target.select()}
      />
      <br />
      {input === 'exemple' ? (
        <div>A venir</div>
      ) : (
        <img src={src} onLoad={clicButton} alt={`data matrix from ${input}`} />
      )}
      {/* <a href="" style="display: none">Scarica Dati</a> */}
    </div>
  );
};

export default FlashMode;
