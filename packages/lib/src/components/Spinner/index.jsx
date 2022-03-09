import React, { useRef, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

import styles from './index.module.css';


export default ({
    position = 'wrapped',
    orientation = 'vertical',
    onUp,
    onDown,
    onWheel,
    className,
    disabled,
    children,
    ...props
}) => {
    const buttonUpRef = useRef();
    const buttonDownRef = useRef();

    const contentOrientation =
        (position === 'left' || position === 'right') ? 'horizontal' :
            (position === 'top' || position === 'bottom') ? 'vertical' :
                orientation;
    const wrapperClassName = classNames(
        className,
        styles.spinner,
        styles[contentOrientation],
        { [styles.wrapped]: (position === 'wrapped' && children) },
        { [styles[position]]: (position !== 'wrapped') }
    );
    const buttonsClassName = classNames(
        styles.buttons,
        styles[orientation]
    );

    useEffect(() => {
        buttonUpRef.current.ref.current.addEventListener('wheel', event => { event.preventDefault(); });
        buttonDownRef.current.ref.current.addEventListener('wheel', event => { event.preventDefault(); });
    });

    const ButtonUp = (
        <Button
            className={styles.up}
            icon='caret up'
            onClick={onUp}
            onWheel={onWheel}
            ref={buttonUpRef}
            disabled={disabled}
        />
    );
    const ButtonDown = (
        <Button
            className={styles.down}
            icon='caret down'
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
