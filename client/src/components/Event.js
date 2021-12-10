import {Link} from 'react-router-dom';

import {EVENT} from '../libs/constants/constants';

import '../styles/event.scss';

export const Event = ({data}) => {
    return (<div className="event">
            {data.map((event, index) => <div
                key={`event-${index}`}
                className="event-item">
                <Link to="#">
                    <span className="img-wrap">
                        <img
                            src={event.download_url}
                            alt=""/>
                    </span>
                    <strong className="event-title">{EVENT[index].TITLE}</strong>
                    <p className="event-desc">{EVENT[index].DESC}</p>
                </Link>
            </div>)}
        </div>
    );
};
