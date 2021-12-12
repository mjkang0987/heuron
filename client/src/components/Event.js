import {useState} from 'react';

import {EventItem} from './EventItem';

import {EVENT} from '../libs/constants/constants';

import '../styles/event.scss';

export const Event = ({data}) => {
    const [items, setItems] = useState(EVENT);
    let timer = null;

    const findItem = (id) => {
        const item = items[id];
        return {
            item,
            index: items.findIndex(el => el.ID === item.ID)
        };
    };

    const moveItemThrottling = ({items}) => {
        if (timer) {
            timer = null;
        }

        timer = setTimeout(() => {
            setItems(items);
            timer = null;
        }, 200);
    };

    const moveItem = (id, toIndex) => {
        const {index} = findItem(id);
        let newItems = [...items];

        const movingCard = newItems.splice(index, 1)[0];
        newItems.splice(toIndex, 0, movingCard);

        moveItemThrottling({items: newItems});
    };

    return (<div className="event">
            {items.map((event) => <EventItem
                key={event.ID}
                index={event.ID}
                id={event.ID}
                source={data[event.ID].download_url}
                moveItem={moveItem}
                findItem={findItem}/>)}
        </div>
    );
};
