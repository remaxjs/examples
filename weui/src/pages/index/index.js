import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <View class="weui-btn weui-btn_primary">页面主操作</View>
    </View>
  );
};
