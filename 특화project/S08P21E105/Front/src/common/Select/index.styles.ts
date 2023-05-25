import styled from 'styled-components';
import { SelectBoxProps } from '@/common/Select/index';

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
`;

export const OptionList = styled.ul``;

export const Selected = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1000;
  margin: 4px 0;
`;

export const SelectBox = styled.div<Partial<SelectBoxProps>>`
  position: relative;
  z-index: 5;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height};
  border-radius: 4px;
  border: 2px solid ${({ theme: { colors } }) => colors.dim_400};
  overflow: hidden;
  cursor: pointer;

  &.active {
    overflow: visible;
    z-index: 5;
    ${OptionList} {
      max-height: 500px;
    }
  }

  .selectBoxLabel {
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    border: 0 none;
    outline: 0 none;
    padding-left: 14px;
    padding-right: 8px;
    background: transparent;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  ${OptionList} {
    position: absolute;
    top: ${({ height }) => height || '34px'};
    left: 0;
    width: 100%;
    background: ${({ theme: { colors } }) => colors.back};
    color: ${({ theme: { colors } }) => colors.dim_400};
    list-style-type: none;
    padding: 0;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme: { colors } }) => colors.dim_400};
    overflow: hidden;
    max-height: 0;
    transition: 0.3s ease-in;

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #303030;
      border-radius: 45px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #303030;
    }
  }

  ${OptionItem} {
    border-bottom: 1px dashed ${({ theme: { colors } }) => colors.dim_900};
    padding: 4px 14px 4px;
    transition: 0.1s;
    height: ${({ height }) => height};
    font-size: ${({ fontSize }) => fontSize};

    :hover {
      background: ${({ theme: { colors } }) => colors.main_100};
    }
    :last-child {
      border-bottom: 0 none;
    }
  }
`;
