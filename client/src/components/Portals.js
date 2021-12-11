import {createPortal} from 'react-dom';
import {useMemo} from 'react';

export const Portal = ({children}) => {
    const elementId = 'layer-root';
    const rootElement = useMemo(() => document.getElementById(elementId), [
        elementId
    ]);

    return rootElement ? createPortal(children, rootElement) : null;
};