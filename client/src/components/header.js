import {NAV} from '../libs/constants/constants';

export const Header = () => {
    return (
        <header>
            <div className="header-wrap">
                <span className="logo"><a href="#" className="link-home">로고</a></span>
                <nav className="nav">
                    <ul>
                        {NAV.map((nav, index) => <li key={`nav-${index}`}>
                            <a href={nav.LINK} className="nav-item">{nav.NAME}</a>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
