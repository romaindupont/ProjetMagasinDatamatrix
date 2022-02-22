import { useState, useEffect } from 'react';
import BackToMenu from 'components/BackToMenu';
import LabelSimplePdf from './LabelSimplePdf';

const bwipjs = require('bwip-js');

const FlashLabel = () => {
  const [input, setInput] = useState('exemple');
  const [src, setImageSrc] = useState('');
  const [word, setWord] = useState('');
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const clicButton = () => {
    LabelSimplePdf(src, word);
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
    setWord(input);
  }, [input, src]);
  return (
    <div className="flashMode">
      <BackToMenu to="/flash" />
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
        <img src={src} alt={`data matrix from ${input}`} />
      )}
      <button className="buttonSave" type="button" onClick={clicButton}>
        Sauvegarder
      </button>
    </div>
  );
};
export default FlashLabel;
