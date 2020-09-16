import * as React from 'react';
import { View, navigateTo, Button } from 'remax/wechat';
import { usePageEvent } from '@remax/macro';
import './index.css';

export default () => {

    usePageEvent('onShow', () => {
        console.log('onSHow', 'index');
    });

    usePageEvent('onHide', () => {
        console.log('onHide', 'index');
    });
  
    return <View className="page-todos">index <Button onClick={()=> {
       navigateTo({ url: '../new/index' });
    }}>page new</Button></View>;
};
