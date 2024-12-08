import GlobalNav from './GlobalNav';
import './Header.css';

import logo7 from './images/Logo7.png';
/*Mobile-view: open-close button show-hide menu*/

function Header({navToHash})
{
    return(
        <header className="header">
            <img src={logo7} className="header__logo" alt="img logo" />
            <h1 className="header__title">
            </h1>          
            <GlobalNav className="header__nav" navToHash={navToHash}/>
        </header>
    );
}

export default Header;
