import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    document.body.className = theme.toLowerCase();
  }, [theme]);

  return (
    <div>
      <h1> Theme is {theme} </h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
