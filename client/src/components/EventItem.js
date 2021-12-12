import {useRef, useState} from 'react';

import {useDrag, useDrop} from 'react-dnd';

import {useIntersection} from '../hooks/useIntersection';

import {EventDesc} from './EventDesc';
import {LazyImage} from './LazyImage';

export const EventItem = ({id, index, source, findItem, moveItem}) => {
    const [visible, setVisible] = useState(false);
    const targetRef = useRef();
    const targetRefs = useRef([]);

    const originalIndex = findItem(id).index;

    const [, drag] = useDrag({
        type   : 'card',
        item   : {id, originalIndex},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end    : (dropResult, monitor) => {
            const {id: droppedId, originalIndex} = monitor.getItem();
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveItem(droppedId, originalIndex);
            }
        },
    });

    const [, drop] = useDrop({
        accept : 'card',
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
        hover({id: draggedId}) {
            if (draggedId !== id) {
                const {index: overIndex} = findItem(id);
                moveItem(draggedId, overIndex);
            }
        }
    });

    const onIntersect = ([{isIntersecting}]) => {
        setVisible(isIntersecting);
    };

    const {setTarget} = useIntersection({
        target   : targetRef,
        onIntersect,
        threshold: .1
    });

    return (<div
            ref={node => drop(node)}
            className={`event-item${visible ? ' load' : ''}`}>
            <div
                ref={node => drag(node)}>
                <a
                    href="/#"
                    ref={setTarget}>
                    <span className="img-wrap">
                        <LazyImage
                            ref={el => targetRefs.current[index] = el}
                            source={source}/>
                    </span>
                    <EventDesc index={index}/>
                </a>
            </div>
        </div>
    );
};

