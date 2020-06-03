import * as React from 'react';
import { Context } from '../CheckboxGroup/index.web';

interface CheckboxProps {
  value: string;
  checked?: boolean;
  className?: string;
}

const CheckboxConsumer: React.FC<CheckboxProps> = ({
  checked,
  value,
  className,
  children,
}) => (
  <Context.Consumer>
    {({ toggle }) => (
      <Checkbox
        checked={checked}
        value={value}
        className={className}
        children={children}
        toggle={toggle}
      />
    )}
  </Context.Consumer>
);

const Checkbox: React.FC<
  CheckboxProps & { toggle: (value: any, checked: boolean) => void }
> = ({ checked, value, className, toggle }) => {
  React.useEffect(() => {
    toggle(value, checked ?? false);
  }, []);

  return (
    <input
      type="checkbox"
      checked={checked}
      value={value}
      className={className}
      onChange={() => toggle(value, !checked)}
    />
  );
};

export default CheckboxConsumer;
