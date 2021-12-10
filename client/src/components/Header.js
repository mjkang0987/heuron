import {useCallback, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import {useIntersection} from '../hooks/useIntersection';

import {NAV} from '../libs/constants/constants';

import '../styles/header.scss';

export const Header = () => {
    const [fixed, setFixed] = useState({isFixed: false});
    const targetRef = useRef(null);

    const onIntersect = useCallback(
        ([{isIntersecting}]) => {
            setFixed({
                isFixed: isIntersecting
            });
        }, [setFixed],
    );

    const {setTarget} = useIntersection({
        target   : targetRef.current,
        onIntersect,
        threshold: 0
    });

    return (
        <header
            ref={setTarget}
            className={!fixed.isFixed ? 'fixed' : ''}>
            <div className="header-wrap">
                <span className="logo">
                    <Link
                        to="#"
                        className="link-home">로고</Link>
                </span>
                <nav className="nav">
                    <ul>
                        {NAV.map((nav, index) => <li key={`nav-${index}`}>
                            <Link
                                to={nav.LINK}
                                className="nav-item">{nav.NAME}</Link>
                        </li>)}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
