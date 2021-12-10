import {EVENT} from '../libs/constants/constants';

import '../styles/event.scss';

export const Event = ({data}) => {
    return (<div className="event">
            {data && data.slice(10, 13).map((event, index) => <div
                key={`event-${index}`}
                className="event-item">
                <a href="#">
                    <span className="img-wrap">
                        <img
                            src={event.download_url}
                            alt=""/>
                    </span>
                    <strong className="event-title">{EVENT[index].TITLE}</strong>
                    <p className="event-desc">{EVENT[index].DESC}</p>
                </a>
            </div>)}
        </div>
    );
};
