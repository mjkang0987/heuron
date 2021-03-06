import {forwardRef, useState} from 'react';
import {useIntersection} from '../hooks/useIntersection';
import {Loading} from './Loading';

export const LazyImage = forwardRef(({source}, ref) => {
    const [visible, setVisible] = useState(false);
    const [load, setLoad] = useState(false);

    const onIntersect = ([{isIntersecting}]) => {
        if (!visible) {
            setVisible(isIntersecting);
        }
    };

    const {setTarget} = useIntersection({
        target   : ref,
        onIntersect,
        threshold: .5
    });
    return (
        <>
            {!load && <Loading type="inline"/>}
            <img
                ref={setTarget}
                src={visible || load ? source : ''}
                onLoad={() => setLoad(true)}
                className={load ? 'load' : ''}
                alt=""/>
        </>
    );
});
