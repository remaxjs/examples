import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import { useQuery } from 'react-query';
import styles from './index.css';

export default () => {
  const { data } = useQuery('count', () => Promise.resolve('Remax'));

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          {!data ? 'loading' :  `Hello ${data}!`}
        </View>
      </View>
    </View>
  );
};
