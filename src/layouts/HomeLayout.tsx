import React, { useState } from "react";
import { Footer } from "../components/footer";
import Header from "../components/header";
import ThemeProvider from "../theme";
import ScrollToTop from "../utils/scrollTop";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Header onOpenNav={() => setOpen(true)} />

      <ThemeProvider>{children}</ThemeProvider>
      <Footer />
    </>
  );
};

export default HomeLayout;
