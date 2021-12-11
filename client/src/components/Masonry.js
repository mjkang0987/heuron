import {useState} from 'react';

import {MasonryItems} from './MasonryItems';

import {GRID_LENGTH} from '../libs/constants/constants';

import '../styles/masonry.scss';

export const Masonry = ({data}) => {
    const [pages, setPages] = useState(1);

    return (<MasonryItems
            items={data.slice(0, (pages * GRID_LENGTH > data.length ? data.length : pages * GRID_LENGTH))}
            max={data.length}
            pages={pages}
            setPages={setPages}/>
    );
};
