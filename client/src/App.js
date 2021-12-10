import {useEffect, useState} from 'react';

import {getItems} from './libs/api/getItems';

import {Header} from './components/Header';
import {Visual} from './components/Visual';
import {Event} from './components/Event';
import {Masonry} from './components/Masonry';

import './styles/initStyle.scss';
import './styles/common.scss';

export const App = () => {
    const [banners, setBanners] = useState(null);

    useEffect(() => {
        (async () => {
            const getImg = await getItems({uri: 'https://picsum.photos/v2/list'});
            setBanners(getImg);
        })();
    }, []);
    return (
        <>
            <Header/>
            <Visual data={banners}/>
            <Event data={banners}/>
            <Masonry data={banners}/>
        </>
    );
};
