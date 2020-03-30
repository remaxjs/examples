import * as React from 'react';
import { Button, TapEvent } from 'remax/one';
import './index.css';

export default function ButtonDemo() {
  function handleTap(event: TapEvent) {
    console.log(event);
  }

  return (
    <>
      <Button
        id="button1"
        className="button"
        style={{
          color: 'purple'
        }}
        disabled={true}
        hoverClassName="hover"
        hoverStartTime={1000}
        hoverStayTime={1000}
        onTap={handleTap}
      >
        disabled button
      </Button>
      <Button
        wechat-type="warn"
        id="button2"
        className="button"
        hoverClassName="hover"
        hoverStartTime={1000}
        hoverStayTime={1000}
        style={{
          color: 'purple'
        }}
        onTap={handleTap}
      >
        button
      </Button>
    </>
  );
}
