import {useRef} from 'react';
import {Link} from 'react-router-dom';

import {Portal} from './Portals';
import {Layer} from './Layer';

import {LazyImage} from './LazyImage';

import '../styles/masonry.scss';

export const Masonry = ({data}) => {
    const targetRefs = useRef([]);

    return (<div className="masonry">
            <div className="items left">
                {data.map((item, index) => <div
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
            </div>
            <Portal>
                <Layer img={data && data[0].download_url}/>
            </Portal>
        </div>
    );
};
