import * as React from 'react';
import { Image, ImageLoadEvent, ImageErrorEvent, TapEvent } from 'remax/one';
import './index.css';

export default function ImageDemo() {
  function handleLoad(event: ImageLoadEvent) {
    console.log('onLoad', event);
  }

  function handleError(event: ImageErrorEvent) {
    console.log('onError', event);
  }

  function handleTap(event: TapEvent) {
    console.log(event);
  }

  return (
    <>
      <Image src="xxx" onError={handleError} />
      {[
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        219,
        220,
      ].map((width) => (
        <Image
          key={width}
          className="image"
          mode="widthFix"
          src={`http://placekitten.com/${width}/300`}
          style={{
            width,
          }}
          onLoad={handleLoad}
          onTap={handleTap}
        />
      ))}
    </>
  );
}
