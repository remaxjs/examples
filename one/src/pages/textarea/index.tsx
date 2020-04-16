import * as React from 'react';
import { Textarea, InputEvent } from 'remax/one';
import './index.css';

export default function TextareaDemo() {
  const [value, setValue] = React.useState('1');
  const [placeholderColor, setPlaceholderColor] = React.useState('red');

  React.useEffect(() => {
    setInterval(() => {
      setPlaceholderColor((prevColor) =>
        prevColor === 'red' ? 'blue' : 'red'
      );
    }, 2000);
  }, []);

  const handleInput = (e: InputEvent) => {
    console.log(e);

    setValue(e.target.value + 'v');

    return e.target.value + 'v';
  };

  const handleFocus = (e: InputEvent) => {
    console.log(e);
  };

  const handleBlur = (e: InputEvent) => {
    console.log(e);
  };

  const handleConfirm = (e: InputEvent) => {
    console.log(e);
  };

  return (
    <>
      defaultValue:
      <Textarea
        defaultValue="默认值"
        className="input"
        style={{
          color: 'purple',
        }}
        autoHeight={true}
        placeholder={value}
        placeholderStyle={{
          color: placeholderColor,
        }}
      />
      value:
      <Textarea
        value={value}
        className="input"
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onConfirm={handleConfirm}
        maxLength={5}
        style={{
          color: 'purple',
        }}
      />
      placeholder:
      <Textarea
        placeholder={value}
        placeholderStyle={{
          color: placeholderColor,
        }}
        className="input"
        style={{
          color: 'purple',
        }}
      />
      disabled:
      <Textarea
        value={value}
        disabled={true}
        className="input"
        style={{
          color: 'purple',
        }}
      />
    </>
  );
}
