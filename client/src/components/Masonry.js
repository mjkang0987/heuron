import {useRef, useState} from 'react';

import {useIntersection} from '../hooks/useIntersection';

import {MasonryItems} from './MasonryItems';

import {GRID_LENGTH} from '../libs/constants/constants';

import '../styles/masonry.scss';

export const Masonry = ({data}) => {
    const [pages, setPages] = useState(1);

    const targetRef = useRef(null);

    const setSliceItems = () => {
        return data.slice(0, (pages * GRID_LENGTH > data.length ? data.length : pages * GRID_LENGTH));
    };

    const onIntersect = ([{isIntersecting}]) => {
        if (data.length === setSliceItems().length) {
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
                items={setSliceItems()}
                index={index}/>
            )}
            <div
                ref={setTarget}
                className="masonry-point"/>
        </div>
    );
};
