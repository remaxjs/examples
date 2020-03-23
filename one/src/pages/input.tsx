import * as React from 'react';
import { Input, InputEvent } from 'remax/one';
import './index.css';

export default function InputDemo() {
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
      <Input
        type="text"
        defaultValue="默认值"
        className="input"
        style={{
          color: 'purple'
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
        maxlength={5}
        style={{
          color: 'purple'
        }}
      />
      placeholder:
      <Input
        type="text"
        placeholder={value}
        className="input"
        style={{
          color: 'purple'
        }}
      />
      disabled:
      <Input
        type="text"
        value={value}
        disabled={true}
        className="input"
        style={{
          color: 'purple'
        }}
      />
      password:
      <Input
        type="text"
        password={true}
        defaultValue={value}
        className="input"
        style={{
          color: 'purple'
        }}
      />
    </>
  );
}
