import {LazyImage} from './LazyImage';
import {useRef} from 'react';

export const Layer = ({isOpen, isAnimate, onAnimate, onClose, img}) => {
    const targetRef = useRef(null);
    return (
        <div className={`layer${isOpen ? ' on' : ''}${isAnimate ? ' animate' : ''}`}>
            <div
                className="layer-wrap"
                onAnimationEnd={onClose}>
                <button
                    type="button"
                    className="btn-close"
                    onClick={onAnimate}>
                    <span>CLOSE</span>
                </button>
                <LazyImage
                    ref={targetRef}
                    source={img}/>
            </div>
        </div>
    );
};
