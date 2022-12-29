import React, { useState } from "react";
import ThemeProvider from "../theme";

const WithoutNavLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default WithoutNavLayout;
