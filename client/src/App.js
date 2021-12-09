import {useLayoutEffect, useState} from 'react';

import {getItems} from './libs/api/getItems';

import {Header} from './components/header';
import {Visual} from './components/Visual';

import {GlobalStyles} from './styles/GlobalStyles';

export const App = () => {
    const [banners, setBanners] = useState(null);

    useLayoutEffect(() => {
        (async () => {
            const getImg = await getItems({uri: 'https://picsum.photos/v2/list'});
            setBanners(getImg);
        })();
    }, []);
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Visual data={banners}/>
        </>
    );
};
