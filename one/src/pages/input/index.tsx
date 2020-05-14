import * as React from 'react';
import { Input, InputEvent } from 'remax/one';
import './index.css';

export default function InputDemo() {
  const [value, setValue] = React.useState('1');
  const [number, setNumber] = React.useState('1');
  const [placeholderColor, setPlaceholderColor] = React.useState('red');

  React.useEffect(() => {
    setInterval(() => {
      setPlaceholderColor((prevColor) =>
        prevColor === 'red' ? 'blue' : 'red'
      );
    }, 2000);
  }, []);

  const handleNumberInput = (e: InputEvent) => {
    setNumber(e.target.value);

    return e.target.value;
  };
  const handleInput = (e: InputEvent) => {
    console.log('onInput', e);

    setValue(e.target.value + 'v');

    return e.target.value + 'v';
  };

  const handleFocus = (e: InputEvent) => {
    console.log('onFocus', e);
  };

  const handleBlur = (e: InputEvent) => {
    console.log('onBlur', e);
  };

  const handleConfirm = (e: InputEvent) => {
    console.log('onConfirm', e);
  };

  return (
    <>
      defaultValue:
      <Input
        type="text"
        defaultValue="默认值"
        className="input"
        style={{
          color: 'purple',
        }}
      />
      number:
      <Input
        type="number"
        value={number}
        className="input"
        onInput={handleNumberInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onConfirm={handleConfirm}
        style={{
          color: 'purple',
        }}
      />
      value:
      <Input
        type="text"
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
      <Input
        type="text"
        placeholder={value}
        className="input"
        style={{
          color: 'purple',
        }}
        placeholderStyle={{
          color: placeholderColor,
        }}
      />
      disabled:
      <Input
        type="text"
        value={value}
        disabled={true}
        className="input"
        style={{
          color: 'purple',
        }}
      />
      password:
      <Input
        type="text"
        password={true}
        defaultValue={value}
        className="input"
        style={{
          color: 'purple',
        }}
      />
    </>
  );
}
