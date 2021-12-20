import { useState, useEffect } from 'react';
import LabelPdf from './LabelPdf';
const bwipjs = require('bwip-js');

const FlashMode = () => {
  const [input, setInput] = useState('exemple');
  const [src, setImageSrc] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const clicButton = () => {
    LabelPdf(src);
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
    setImageSrc(canvas.toDataURL('image/png'));
  }, [input, src]);
  return (
    <div className="flashMode">
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
    </div>
  );
};

export default FlashMode;
