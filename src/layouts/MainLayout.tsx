import { Container } from "@mui/material";
import React from "react";
import ThemeProvider from "../providers/ThemeProvider";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <Container maxWidth={"xl"}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {children}
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
