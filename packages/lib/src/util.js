import { useEffect, useRef } from 'react';


/**
 * `useEffect` wrapper that will only fire second render and after
 * 
 * @param {function} effect Imperative function that can return a cleanup function
 * @param {*} deps If present, effect will only activate if the values in the list change
 */
export function useUpdateEffect(effect, deps) {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current)
            return effect();

        didMount.current = true;
    }, deps);
}
;
