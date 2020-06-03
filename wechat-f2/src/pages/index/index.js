import * as React from 'react';
import { Canvas, getSystemInfoSync, createSelectorQuery } from 'remax/wechat';
import { usePageEvent } from 'remax/macro';
import F2 from '@antv/f2';
import './index.css';

export default () => {
  function onInitChart(F2, config) {
    const chart = new F2.Chart(config);
    const data = [
      { value: 63.4, city: 'New York', date: '2011-10-01' },
      { value: 62.7, city: 'Alaska', date: '2011-10-01' },
      { value: 72.2, city: 'Austin', date: '2011-10-01' },
      { value: 58, city: 'New York', date: '2011-10-02' },
      { value: 59.9, city: 'Alaska', date: '2011-10-02' },
      { value: 67.7, city: 'Austin', date: '2011-10-02' },
      { value: 53.3, city: 'New York', date: '2011-10-03' },
      { value: 59.1, city: 'Alaska', date: '2011-10-03' },
      { value: 69.4, city: 'Austin', date: '2011-10-03' },
    ];
    chart.source(data, {
      date: {
        range: [0, 1],
        type: 'timeCat',
        mask: 'MM-DD',
      },
      value: {
        max: 300,
        tickCount: 4,
      },
    });
    chart.area().position('date*value').color('city').adjust('stack');
    chart.line().position('date*value').color('city').adjust('stack');
    chart.render();
    // 注意：需要把chart return 出来
    return chart;
  }

  usePageEvent('onReady', () => {
    const canvasNode = createSelectorQuery().select('.f2-canvas');

    canvasNode
      .fields({
        node: true,
        size: true,
      })
      .exec((res) => {
        console.log(res);
        const { node, width, height } = res[0];
        const context = node.getContext('2d');
        const pixelRatio = getSystemInfoSync().pixelRatio;
        // 高清设置
        node.width = width * pixelRatio;
        node.height = height * pixelRatio;

        const config = { context, width, height, pixelRatio };
        onInitChart(F2, config);
      });
  });

  return <Canvas type="2d" className="f2-canvas" />;
};
