import React from 'react';
import { usePageEvent } from '@remax/macro';
import { View } from '@remax/wechat';

export default function ({ page, children }) {
    usePageEvent('onShow', () => {
        console.log('onSHow', page);
    });

    usePageEvent('onHide', () => {
        console.log('onHide', page);
    });

    return <View>MMMMMMM {children}</View>;
}
