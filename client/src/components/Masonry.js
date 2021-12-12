import {useRef, useState} from 'react';

import {MasonryItems} from './MasonryItems';

import {GRID_LENGTH} from '../libs/constants/constants';

import '../styles/masonry.scss';
import {useIntersection} from '../hooks/useIntersection';

export const Masonry = ({data}) => {
    const [pages, setPages] = useState(1);

    const targetRef = useRef(null);

    const onIntersect = ([{isIntersecting}]) => {
        if (data.length === data.slice(0, (pages * GRID_LENGTH > data.length ? data.length : pages * GRID_LENGTH)).length) {
            return;
        }

        if (isIntersecting) {
            setPages(pages + 1);
        }
    };

    const {setTarget} = useIntersection({
        target   : targetRef.current,
        onIntersect,
        threshold: 1
    });

    return (<div className="masonry">
            {Array(pages).fill(0).map((_, index) => <MasonryItems
                key={`pages-${index}`}
                items={data.slice(0, (pages * GRID_LENGTH > data.length ? data.length : pages * GRID_LENGTH))}
                index={index}/>
            )}
            <div
                ref={setTarget}
                className="masonry-point"/>
        </div>
    );
};
