import React from "react";
import MyThemeProvider from "../src/styles/MyThemeProvider";
import MyRecoilProvider from "../src/recoil/MyRecoilProvider";
import { withRouter } from "storybook-addon-react-router-v6";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withRouter,
  (Story: any) => (
      <MyRecoilProvider>
        <MyThemeProvider>
            <Story/>
        </MyThemeProvider>
    </MyRecoilProvider>
  )
]