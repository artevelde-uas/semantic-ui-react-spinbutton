import React, { useRef, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

import styles from './index.module.css';


export default ({
    position = 'wrapped',
    orientation = 'vertical',
    upIcon = 'caret up',
    downIcon = 'caret down',
    onUp,
    onDown,
    onWheel,
    className,
    disabled,
    children,
    size,
    ...props
}) => {
    // Get references to button components
    const buttonUpRef = useRef();
    const buttonDownRef = useRef();

    // Determine content orientation
    const contentOrientation =
        (position === 'left' || position === 'right') ? 'horizontal' :
            (position === 'top' || position === 'bottom') ? 'vertical' :
                orientation;

    // Merge class names
    const wrapperClassName = classNames(
        className,
        styles.spinbutton,
        styles[contentOrientation],
        { [styles[position]]: (position !== 'wrapped') }
    );
    const buttonsClassName = classNames(
        styles.buttons,
        styles[orientation]
    );

    // Prevent default scroll behavior on wheel event
    useEffect(() => {
        if (onWheel === undefined) return;

        buttonUpRef.current.ref.current.addEventListener('wheel', event => { event.preventDefault(); });
        buttonDownRef.current.ref.current.addEventListener('wheel', event => { event.preventDefault(); });
    });

    const ButtonUp = (
        <Button
            className={styles.up}
            size={size}
            icon={upIcon}
            onClick={onUp}
            onWheel={onWheel}
            ref={buttonUpRef}
            disabled={disabled}
        />
    );
    const ButtonDown = (
        <Button
            className={styles.down}
            size={size}
            icon={downIcon}
            onClick={onDown}
            onWheel={onWheel}
            ref={buttonDownRef}
            disabled={disabled}
        />
    );

    return (
        <div {...props} className={wrapperClassName}>
            {(position === 'wrapped') ? (
                <React.Fragment>
                    {ButtonUp}
                    {children}
                    {ButtonDown}
                </React.Fragment>
            ) : (position === 'top' || position === 'left') ? (
                <React.Fragment>
                    <div className={buttonsClassName}>
                        {ButtonUp}
                        {ButtonDown}
                    </div>
                    {children}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {children}
                    <div className={buttonsClassName}>
                        {ButtonUp}
                        {ButtonDown}
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}
