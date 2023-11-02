import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

/**
 * @param {Function} onClickOutside  click function 
 * @param {Boolean} onClickOutside  true / false value close
 * @param {Object} onClickOutside  jsx for body
 * @returns close body outside click
 */
export function OutSideClick({ onClickOutside, show, body }) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);

    if (!show)
        return null;

    return (
        <div ref={ref}>
            {body}
        </div>
    );
}
OutSideClick.propTypes = {
    onClickOutside: PropTypes.func,
    show: PropTypes.bool,
    body: PropTypes.object
}