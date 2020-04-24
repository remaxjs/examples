import * as React from 'react';
import { View, Image, Text } from 'remax/ali';
import area from '../../assets/area.png';
import './index.css';

const charts = [
  { name: 'line', value: '折线图' },
  { name: 'area', value: '区域图' },
  { name: 'stack-area', value: '层叠区域图' },
  { name: 'column', value: '柱状图' },
  { name: 'dodge', value: '分组柱状图' },
  { name: 'stack-column', value: '层叠柱状图' },
  { name: 'bar', value: '条形图' },
  { name: 'dodge-bar', value: '分组条形图' },
  { name: 'stack-bar', value: '层叠条形图' },
  { name: 'ring', value: '环图' },
  { name: 'pie', value: '饼图' },
  { name: 'rose', value: '玫瑰图' },
  { name: 'radar', value: '雷达图' },
  { name: 'gauge', value: '仪表盘' },
  { name: 'double-axis', value: '双 Y 轴' },
];

const interactions = [
  { name: 'selection-for-bar-chart', value: '柱状图选中交互' },
  { name: 'selection-for-pie-chart', value: '饼图选中交互' },
  { name: 'pan-bar-chart', value: '柱状图平移交互' },
  { name: 'pan-line-chart', value: '折线图平移交互' },
];

export default () => {
  const gotoPage = (page) => {
    my.navigateTo({
      url: '../charts/' + page + '/index',
    });
  };

  return (
    <View className="container">
      {charts.map((chart) => (
        <View key={chart.name} className="list-item">
          <Image
            src={area}
            mode="aspectFit"
            onClick={() => gotoPage(chart.name)}
          />
          {chart.value}
        </View>
      ))}

      <View className="footer">
        <Text>更多示例，详见 AntV 官网</Text>
        <Text>https://antv.alipay.com/zh-cn/f2/3.x/index.html</Text>
      </View>
    </View>
  );
};
