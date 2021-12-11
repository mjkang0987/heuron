import {useRef, useState} from 'react';

import {useIntersection} from '../hooks/useIntersection';

import {GRID_LENGTH} from '../libs/constants/constants';

import {LazyImage} from './LazyImage';

import {Portal} from './Portals';
import {Layer} from './Layer';

export const MasonryItems = ({items, max, pages, setPages}) => {
    const targetRefs = useRef([]);
    const targetRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [img, setImg] = useState(null);

    const onOpen = ({source}) => {
        setOpen(true);
        setImg(source);
    };

    const onAnimate = () => {
        setAnimate(true);
    };

    const onClose = () => {
        if (animate) {
            setOpen(false);
            setAnimate(false);
            setImg(null);
        }
    };

    const onIntersect = ([{isIntersecting}]) => {
        if (max === items.length) {
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
            {Array(pages).fill(0).map((_, index) => <div
                key={`page-${index}`}
                className={`items ${index % 2 === 0 ? 'left' : 'right'}`}>
                {items.slice(index * GRID_LENGTH, (index + 1) * GRID_LENGTH).map((item, index) => <div
                    key={`'item-${item.id}`}
                    className="item">
                    <div className="img-wrap">
                        <button
                            type="button"
                            onClick={() => onOpen({source: item.download_url})}>
                            <LazyImage
                                ref={el => targetRefs.current[index] = el}
                                source={item.download_url}/>
                        </button>
                    </div>
                </div>)}
            </div>)}
            <div
                ref={setTarget}
                className="masonry-point"/>
            {open && <Portal>
                <Layer
                    isOpen={open}
                    isAnimate={animate}
                    setOpen={setOpen}
                    onAnimate={onAnimate}
                    onClose={onClose}
                    img={img}/>
            </Portal>}
        </div>
    );
};

