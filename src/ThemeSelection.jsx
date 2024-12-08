import './ThemeSelection.css';
import React, {useState,useEffect} from "react";

function ThemeSelection()
{
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.className = theme; // Dynamically apply theme class
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };

    return(
    <div>
        <h2>Theme selection</h2>
        <div className="Theme">
          <button className="Themebutton" onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
          </button>
        </div>
    </div>
    );
}
export default ThemeSelection;