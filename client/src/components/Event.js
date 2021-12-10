import {useRef} from 'react';
import {Link} from 'react-router-dom';

import {LazyImage} from './LazyImage';
import {EventDesc} from './EventDesc';

import '../styles/event.scss';

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
                    <EventDesc index={index}/>
                </Link>
            </div>)}
        </div>
    );
};
