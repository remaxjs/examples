import * as React from 'react';
import { View, Text } from 'remax/wechat';

const Layout = (props) => {
  return (
    <View className="layout">
      <Text>LAYOUT</Text>
      {props.children}
    </View>
  );
};

export const withLayout = (Component) => {
  return props => <Layout><Component {...props}></Component></Layout>
};