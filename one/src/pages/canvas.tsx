import * as React from 'react';
import { Canvas, TapEvent } from 'remax/one';
import './index.css';

export default function TextDemo() {
  function handleTap(event: TapEvent) {
    console.log(event);
  }

  return <Canvas />;
}
