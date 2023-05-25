import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    // 메인 컬러
    main_100: '#DFF7FA',
    main_200: '#BFEFF4',
    main_300: '#9FE6EF',
    main_400: '#7FDEE9',
    main_500: '#5FD6E4',
    main_600: '#4CABB6',
    main_700: '#398089',
    main_800: '#26565B',
    main_900: '#132B2E',
    // 서브1 컬러
    sub1_100: '#FFEAE4',
    sub1_200: '#FFD5C9',
    sub1_300: '#FFC1AD',
    sub1_400: '#FFAC92',
    sub1_500: '#FF9777',
    sub1_600: '#CC795F',
    sub1_700: '#995B47',
    sub1_800: '#663C30',
    sub1_900: '#331E18',
    // 서브2 컬러
    sub2_100: '#F5E7FF',
    sub2_200: '#EBCFFF',
    sub2_300: '#E0B8FF',
    sub2_400: '#D6A0FF',
    sub2_500: '#CC88FF',
    sub2_600: '#A36DCC',
    sub2_700: '#7A5299',
    sub2_800: '#523666',
    sub2_900: '#291B33',
    // 회색 계열
    dim_100: '#EBEBEB',
    dim_200: '#D8D8D8',
    dim_300: '#C4C4C4',
    dim_400: '#B1B1B1',
    dim_500: '#9D9D9D',
    dim_600: '#7E7E7E',
    dim_700: '#5E5E5E',
    dim_800: '#3F3F3F',
    dim_900: '#1F1F1F',
    star: '#FADB14',
    back: '#F9FAFB',
    warn: '#FAAD14',
    error: '#FF4D4F',
    white: '#FFFFFF',
  },

  fonts: {
    desktop_h_5xl: '3rem',
    desktop_h_4xl: '2.25rem',
    desktop_h_3xl: '1.875rem',
    desktop_h_2xl: '1.5rem',
    desktop_h_xl: '1.25rem',

    mobile_h_4xl: '2.25rem',
    mobile_h_3xl: '1.875rem',
    mobile_h_2xl: '1.5rem',
    mobile_h_xl: '1.25rem',

    body_lg: '1.125rem',
    body_base: '1rem',
    body_sm: '0.875rem',
    body_xm: '0.75rem',
  },

  lineHeights: {
    desktop_h_5xl: '3rem',
    desktop_h_4xl: '2.5rem',
    desktop_h_3xl: '2.25rem',
    desktop_h_2xl: '2rem',
    desktop_h_xl: '1.75rem',

    mobile_h_4xl: '2.5rem',
    mobile_h_3xl: '2.25rem',
    mobile_h_2xl: '2rem',
    mobile_h_xl: '1.75rem',

    body_lg: '1.75rem',
    body_base: '1.5rem',
    body_sm: '1.25rem',
    body_xm: '1rem',
  },

  shadows: {
    basic: '0 2px 8px #F0F1F2',
  },

  ui: {
    toolbarHeight: '5rem',
  },
};

export default theme;
