import {useRef, useState} from 'react';

import {useIntersection} from '../hooks/useIntersection';

import {NAV} from '../libs/constants/constants';

import '../styles/header.scss';

export const Header = () => {
    const [fixed, setFixed] = useState(false);
    const targetRef = useRef(null);

    const onIntersect = ([{isIntersecting}]) => {
        setFixed(isIntersecting);
    };

    const {setTarget} = useIntersection({
        target   : targetRef.current,
        onIntersect,
        threshold: 0
    });

    return (
        <header
            ref={setTarget}
            className={!fixed ? 'fixed' : ''}>
            <div className="header-wrap">
                <span className="logo">
                    <a
                        href="/#"
                        className="link-home">로고</a>
                </span>
                <nav className="nav">
                    <ul>
                        {NAV.map((nav) => <li key={`nav-${nav.ID}`}>
                            <a
                                href={nav.LINK}
                                className="nav-item">{nav.NAME}</a>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
