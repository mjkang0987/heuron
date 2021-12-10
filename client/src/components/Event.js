import {useRef} from 'react';
import {Link} from 'react-router-dom';

import {EVENT} from '../libs/constants/constants';

import '../styles/event.scss';
import {LazyImage} from './LazyImage';

export const Event = ({data}) => {
    const targetRefs = useRef([]);

    return (<div className="event">
            {data.map((event, index) => <div
                key={`event-${index}`}
                className="event-item">
                <Link to="#">
                    <span className="img-wrap">
                        <LazyImage
                            ref={el => targetRefs.current[index] = el}
                            source={event.download_url}/>
                    </span>
                    <strong className="event-title">{EVENT[index].TITLE}</strong>
                    <p className="event-desc">{EVENT[index].DESC}</p>
                </Link>
            </div>)}
        </div>
    );
};
