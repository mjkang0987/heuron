import {NAV} from '../libs/constants/constants';

export const Header = () => {
    return (
        <header>
            <div className="header-wrap">
                <span className="logo">로고</span>
                <nav>
                    <ul>
                        {NAV.map((nav, index) => <li key={`nav-${index}`}>
                            <a href={nav.LINK}>{nav.NAME}</a>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
