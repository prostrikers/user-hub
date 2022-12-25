import React from "react";
import ThemeProvider from "../providers/ThemeProvider";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </div>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
