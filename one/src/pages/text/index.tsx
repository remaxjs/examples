import * as React from 'react';
import { Text, TapEvent } from 'remax/one';
import './index.css';

export default function TextDemo() {
  function handleTap(event: TapEvent) {
    console.log('onTap', event);
  }

  return (
    <Text
      className="text"
      style={{
        color: 'purple',
      }}
      selectable={true}
      onTap={handleTap}
    >
      text {'&nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;'}
    </Text>
  );
}
