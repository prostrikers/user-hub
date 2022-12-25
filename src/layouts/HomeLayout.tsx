import React, { useState } from "react";
import Header from "../components/header";
import ThemeProvider from "../theme";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpen(true)} />

      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default HomeLayout;
