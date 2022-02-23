import { useState, useEffect } from 'react';
import BackToMenu from '../BackToMenu';
import LabelPdf from './LabelPdf';

const bwipjs = require('bwip-js');

const FlashMode = () => {
  const [input, setInput] = useState('exemple');
  const [src, setImageSrc] = useState('');
  const [ref, setInputRef] = useState('');
  const [manitouRef, setManitouRef] = useState('');
  const [word, setWord] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const clicButton = () => {
    LabelPdf(src, ref, manitouRef, word);
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
    setWord(input);
  }, [input, src]);
  return (
    <div className="flashMode">
      <BackToMenu to="/flash" onClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
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
