import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './index.styles';

export interface SelectBoxProps {
  items: Array<{ value: string; text: string }>;
  width?: string;
  height?: string;
  fontSize?: string;
  changeOption: React.Dispatch<React.SetStateAction<string>>;
}

const Select = ({ items, width, height, fontSize, changeOption }: SelectBoxProps) => {
  const [isActive, setActive] = useState(false);
  const [selectItem, setSelectItem] = useState<string>(items[0].value || '');
  const SelectBoxRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const handleSelectOption = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as Element;
    const labelText = document.getElementsByClassName('labelText')[0];
    labelText.innerHTML = target.textContent || labelText?.textContent || '';
    setActive(false);
    setSelectItem(target.getAttribute('data-value') || '');
  };

  useEffect(() => {
    changeOption(selectItem);
  }, [selectItem, changeOption]);

  // 외부 클릭시 닫힘
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (SelectBoxRef.current && !SelectBoxRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [SelectBoxRef]);

  return (
    <Styled.SelectBox
      ref={SelectBoxRef}
      className={isActive ? 'active' : ''}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      <Styled.Selected type="button" className="selectBoxLabel" onClick={handleClick}>
        <div className="labelText" style={{ fontSize: `${fontSize}` }}>
          {items[0].text || ''}
        </div>
        {/* {isActive || <IconArrowDown />} */}
        {/* {isActive && <IconArrowUp />} */}
      </Styled.Selected>
      <Styled.OptionList>
        {items.map((item) => {
          return (
            <Styled.OptionItem
              onClick={handleSelectOption}
              key={item.value}
              data-value={item.value}
            >
              {item.text}
            </Styled.OptionItem>
          );
        })}
      </Styled.OptionList>
    </Styled.SelectBox>
  );
};

export default Select;
