import {useEffect, useState} from "react";

export const useIntersection = (
    {root, rootMargin, threshold = 1, onIntersect,}) => {
    const [target, setTarget] = useState(null);

    useEffect(() => {
        if (!target) {
            return;
        }

        const observer = new IntersectionObserver(
            onIntersect,
            {root, rootMargin, threshold}
        );
        observer.observe(target);

        return () => observer.unobserve(target);
    }, [onIntersect, root, rootMargin, target, threshold]);

    return {
        setTarget
    }
};