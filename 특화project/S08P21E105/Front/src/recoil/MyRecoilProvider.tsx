import React from "react";
import { RecoilRoot } from "recoil";

const MyRecoilProvider = ({ children } : { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
};

export default MyRecoilProvider;
