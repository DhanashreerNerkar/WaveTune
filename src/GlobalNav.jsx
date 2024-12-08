import menu from './menu';
import './GlobalNav.css';
import {useState} from 'react';
import menubutton from './images/menu.png';
import crossbutton from './images/cross.png';

function GlobalNav({className,navToHash})
{
    const [showMenu, setShowMenu]= useState(false);
    const list=menu.map(item=>{
            return(
                <li key={item.name} className="global-nav__item">
                    <a 
                    className="global-nav__link" 
                    onClick = {navToHash}
                    href = {item.path}
                    >
                        {item.name}
                    </a>
                </li>
            );
        });
    return (
        <nav className={`global-nav ${className}`}>
            <button 
                onClick = { () => setShowMenu(!showMenu) } 
                className="global-nav__toggle"
            > 
                {
                 showMenu ? 
                 (
                    <span className="close-icon">
                        <img src={crossbutton}/> 
                    </span>//<span className="close-icon">&#x2715;</span>  Cross icon
                ) : (
                    <div className="hamburger-icon">
                        <img src={menubutton}/> 
                    </div>
                )
                 } 
            </button>
            {
                <ul 
                className={
                    `global-nav__list ${showMenu?
                        '':'global-nav__list--hamburgered'}`
                    }
                >
                    {list}
                </ul>
            }
        </nav>
    );
}

export default GlobalNav;

