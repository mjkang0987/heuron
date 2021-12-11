import {useRef} from 'react';

import {LazyImage} from './LazyImage';
import {EventDesc} from './EventDesc';

import '../styles/event.scss';

export const Event = ({data}) => {
    const targetRefs = useRef([]);

    return (<div className="event">
            {data.map((event, index) => <div
                key={`event-${event.id}`}
                className="event-item">
                <a href="/#">
                    <span className="img-wrap">
                        <LazyImage
                            ref={el => targetRefs.current[index] = el}
                            source={event.download_url}/>
                    </span>
                    <EventDesc index={index}/>
                </a>
            </div>)}
        </div>
    );
};
