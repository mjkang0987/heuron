import {useRef, useState} from 'react';

import {useMediaQuery} from 'react-responsive';

import {useIntersection} from '../hooks/useIntersection';

import {NAV} from '../libs/constants/constants';

import '../styles/header.scss';

export const Header = () => {
    const [fixed, setFixed] = useState(false);
    const [open, setOpen] = useState(false);

    const targetRef = useRef(null);

    const isMobile = useMediaQuery({
        query : "(max-width:768px)"
    });

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
                    {isMobile && <button
                        type="button"
                        className="btn-nav"
                        onClick={() => setOpen(!open)}>
                        {open ? 'CLOSE' : 'OPEN'}</button>}
                    <ul className={isMobile && open ? 'on' : ''}>
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
