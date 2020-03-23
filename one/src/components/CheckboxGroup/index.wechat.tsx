import * as React from 'react';
import { CheckboxGroup } from 'remax/wechat';

interface CheckboxGroupProps {
  onChange?: (e: any) => void;
  className?: string;
}

// 微信平台的限制，这里必须声明需要用到的属性，不能用 Spread Attributes
export default ({
  onChange,
  className,
  children
}: React.PropsWithChildren<CheckboxGroupProps>) => (
  <CheckboxGroup onChange={onChange} className={className}>
    {children}
  </CheckboxGroup>
);
