import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // 메인 컬러
      main_100: string;
      main_200: string;
      main_300: string;
      main_400: string;
      main_500: string;
      main_600: string;
      main_700: string;
      main_800: string;
      main_900: string;
      // 서브1 컬러
      sub1_100: string;
      sub1_200: string;
      sub1_300: string;
      sub1_400: string;
      sub1_500: string;
      sub1_600: string;
      sub1_700: string;
      sub1_800: string;
      sub1_900: string;
      // 서브2 컬러
      sub2_100: string;
      sub2_200: string;
      sub2_300: string;
      sub2_400: string;
      sub2_500: string;
      sub2_600: string;
      sub2_700: string;
      sub2_800: string;
      sub2_900: string;
      // 회색 계열
      dim_100: string;
      dim_200: string;
      dim_300: string;
      dim_400: string;
      dim_500: string;
      dim_600: string;
      dim_700: string;
      dim_800: string;
      dim_900: string;
      star: string;
      back: string;
      warn: string;
      error: string;
      white: string;
    };

    fonts: {
      desktop_h_5xl: string;
      desktop_h_4xl: string;
      desktop_h_3xl: string;
      desktop_h_2xl: string;
      desktop_h_xl: string;

      mobile_h_4xl: string;
      mobile_h_3xl: string;
      mobile_h_2xl: string;
      mobile_h_xl: string;

      body_lg: string;
      body_base: string;
      body_sm: string;
      body_xm: string;
    };

    lineHeights: {
      desktop_h_5xl: string;
      desktop_h_4xl: string;
      desktop_h_3xl: string;
      desktop_h_2xl: string;
      desktop_h_xl: string;

      mobile_h_4xl: string;
      mobile_h_3xl: string;
      mobile_h_2xl: string;
      mobile_h_xl: string;

      body_lg: string;
      body_base: string;
      body_sm: string;
      body_xm: string;
    };

    shadows: {
      basic: string;
    };

    ui: {
      toolbarHeight: string;
    };
  }
}
