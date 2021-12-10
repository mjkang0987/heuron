import {Link} from 'react-router-dom';

import {NAV} from '../libs/constants/constants';

import '../styles/header.scss';

export const Header = () => {
    return (
        <header>
            <div className="header-wrap">
                <span className="logo">
                    <Link to="#" className="link-home">로고</Link>
                </span>
                <nav className="nav">
                    <ul>
                        {NAV.map((nav, index) => <li key={`nav-${index}`}>
                            <Link to={nav.LINK} className="nav-item">{nav.NAME}</Link>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
