import "./App.css";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import theme from "./styles/them";
import Toolbar from "./components/Toolbar";
import { useState } from "react";
import { Container } from "./components/Container";

function App() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>
        <Container>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
