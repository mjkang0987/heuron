import {useCallback, useRef} from 'react';
import {Link} from 'react-router-dom';

import {LazyImage} from './LazyImage';

import {GRID_LENGTH} from '../libs/constants/constants';
import {useIntersection} from '../hooks/useIntersection';

export const MasonryItems = ({items, max, pages, setPages}) => {
    const targetRefs = useRef([]);
    const targetRef = useRef(null);

    const onIntersect = useCallback(
        ([{isIntersecting}]) => {
            if (max === items.length) {
                return;
            }

            if (isIntersecting) {
                setPages(pages + 1);
            }
        }, [pages, setPages, max, items.length],
    );

    const {setTarget} = useIntersection({
        target   : targetRef.current,
        onIntersect,
        threshold: 1
    });

    return (<div className="masonry">
            {Array(pages).fill(0).map((_, index) => <div
                key={`page-${index}`}
                className={`items ${index % 2 === 0 ? 'left' : 'right'}`}>
                {items.slice(index * GRID_LENGTH, (index + 1) * GRID_LENGTH).map((item, index) => <div
                    key={`'item-${index}`}
                    className="item">
                    <div className="img-wrap">
                        <Link to="#">
                            <LazyImage
                                ref={el => targetRefs.current[index] = el}
                                source={item.download_url}/>
                        </Link>
                    </div>
                </div>)}
            </div>)}
            <div
                ref={setTarget}
                className="masonry-point"/>
        </div>
    );
};

