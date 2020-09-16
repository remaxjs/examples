import * as React from 'react';
import { View, navigateTo, Button } from 'remax/wechat';
import './index.css';

export default () => {
  
    return <View className="page-todos">index <Button onClick={()=> {
       navigateTo({ url: '../index/index' });
    }}>page index</Button></View>;
};
