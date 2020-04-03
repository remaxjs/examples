import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import styles from './index.module.css';
import  { useReady } from 'remax';
import uma from '@/uma';

export default () => {
  useReady(()=>{
    uma.trackEvent('buy',{car:'bmw'});
  });
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>开始
        </View>
      </View>
    </View>
  );
};
