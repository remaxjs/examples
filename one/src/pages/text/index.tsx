import * as React from 'react';
import { Text, TapEvent } from 'remax/one';
import './index.css';

export default function TextDemo() {
  function handleTap(event: TapEvent) {
    console.log(event);
  }

  React.useEffect(() => {
    console.log('ah');
  }, []);

  return (
    <Text
      className="text"
      style={{
        color: 'purple'
      }}
      selectable={true}
      decode={true}
      onTap={handleTap}
    >
      text &nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;
    </Text>
  );
}
