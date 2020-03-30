import * as React from 'react';
import { WebView } from 'remax/one';

export default function WebViewDemo() {
  function handleMessage(e: any) {
    console.log(e);
  }

  return <WebView src="https://www.alipay.com" onMessage={handleMessage} />;
}
