import * as React from 'react';
import { Textarea, InputEvent } from 'remax/one';
import './index.css';

export default function TextareaDemo() {
  const [value, setValue] = React.useState('1');
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
          color: 'purple'
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
        maxlength={5}
        style={{
          color: 'purple'
        }}
      />
      placeholder:
      <Textarea
        placeholder={value}
        className="input"
        style={{
          color: 'purple'
        }}
      />
      disabled:
      <Textarea
        value={value}
        disabled={true}
        className="input"
        style={{
          color: 'purple'
        }}
      />
    </>
  );
}
