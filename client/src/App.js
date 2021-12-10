import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Main} from './routes/Main';

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="*" element={<Main/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};
