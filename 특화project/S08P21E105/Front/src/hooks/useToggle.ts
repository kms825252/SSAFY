import { useState } from 'react';

/**
 * boolean 을 toggle 하거나 true, false 로 지정할 수 있다
 * @param defaultValue
 */
const useToggle = (defaultValue: any) => {
  const [value, setValue] = useState(() => defaultValue);

  const toggleValue = (value: any) => {
    setValue((currentValue: any) => (typeof value === 'boolean' ? value : !currentValue));
  };

  return [value, toggleValue];
};

export default useToggle;
