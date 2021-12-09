import {GlobalStyles} from './styles/GlobalStyles';

import {Header} from './components/header';
import {Visual} from './components/Visual';

export const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Visual/>
        </>
    );
};
