import "./App.css";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import theme from "./styles/them";

function App() {
  const isDarkMode = useSelector((state) => state.them);
  return (
    <>
      <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
