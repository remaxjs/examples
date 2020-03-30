import * as React from 'react';
import {
  View,
  TouchStartEvent,
  TouchMoveEvent,
  TouchEndEvent,
  TapEvent
} from 'remax/one';
import { chooseImage } from '@/api';
import './index.css';

export default function ViewDemo() {
  function handleTap(event: TapEvent) {
    chooseImage();
    console.log(event);
  }

  function handleTouchStart(event: TouchStartEvent) {
    console.log(event);
  }

  function handleTouchMove(event: TouchMoveEvent) {
    console.log(event);
  }

  function handleTouchEnd(event: TouchEndEvent) {
    console.log(event);
  }

  function handleLongTap(event: TapEvent) {
    console.log(event);
  }

  function alipayOnFirstAppear() {
    console.log('first appear');
  }

  return (
    <View
      id="view"
      data-value="outer"
      onTap={handleTap}
      onLongTap={handleLongTap}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="view"
      hoverClassName="hover"
      hoverStartTime={1000}
      hoverStayTime={1000}
      role="view"
      alipay-onFirstAppear={alipayOnFirstAppear}
    >
      <View
        data-value="inner"
        style={{
          color: 'purple'
        }}
      >
        view
      </View>
    </View>
  );
}
