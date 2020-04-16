import * as React from 'react';

interface CheckboxGroupProps {
  onChange?: (e: any) => void;
  className?: string;
}

export const Context = React.createContext<{
  value: string[];
  toggle: (value: any, checked: boolean) => void;
}>({
  value: [],
  toggle: () => void 0,
});

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  onChange,
  className,
  children,
}: React.PropsWithChildren<CheckboxGroupProps>) => {
  const [value, setValue] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (typeof onChange === 'function') {
      onChange({ detail: { value } });
    }
  }, [value]);

  function handleToggle(value: any, checked: boolean) {
    setValue((values) => {
      let newValues = values;
      if (checked) {
        newValues = Array.from(new Set([...values, value]));
      } else {
        newValues = values.filter((i) => i !== value);
      }

      return newValues;
    });
  }

  return (
    <Context.Provider
      value={{
        value,
        toggle: handleToggle,
      }}
    >
      <div className={className}>{children}</div>
    </Context.Provider>
  );
};

export default CheckboxGroup;
