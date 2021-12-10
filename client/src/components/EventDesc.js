import {EVENT} from '../libs/constants/constants';

export const EventDesc = ({index}) => {
    return (
        <>
            <strong className="event-title">{EVENT[index].TITLE}</strong>
            <p className="event-desc">{EVENT[index].DESC}</p>
        </>
    );
};

