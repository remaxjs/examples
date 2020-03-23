import * as React from 'react';
import { Checkbox } from 'remax/wechat';

interface CheckboxProps {
  value: string;
  checked?: boolean;
  className?: string;
}

// 微信平台的限制，这里必须声明需要用到的属性，不能用 Spread Attributes
export default ({ value, checked, className }: CheckboxProps) => (
  <Checkbox value={value} checked={checked} className={className} />
);
