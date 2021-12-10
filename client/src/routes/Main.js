import {useEffect, useState} from 'react';

import {getItems} from '../libs/api/getItems';

import {Loading} from '../components/Loading';
import {Header} from '../components/Header';
import {Visual} from '../components/Visual';
import {Event} from '../components/Event';
import {Masonry} from '../components/Masonry';

import '../styles/initStyle.scss';
import '../styles/common.scss';

export const Main = () => {
    const [visuals, setVisuals] = useState(null);
    const [eventBanners, setEventBanners] = useState(null);
    const [gridBanners, setGridBanners] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        (async () => {
            const getAllImg = await getItems({uri: 'https://picsum.photos/v2/list'});
            await setVisuals(getAllImg.slice(0, 10));
            await setEventBanners(getAllImg.slice(10, 13));
            await setGridBanners(getAllImg.slice(0, 11));
        })();
    }, [setVisuals, setEventBanners, setGridBanners]);

    return (
        <>
            {loading
                ? <Loading type='full'/>
                : <>
                    <Header/>
                    {visuals && <Visual data={visuals}/>}
                    {eventBanners && <Event data={eventBanners}/>}
                    {gridBanners && <Masonry data={gridBanners}/>}
                </>}
        </>
    );
};
