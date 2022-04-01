import React, { useRef, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

import styles from './index.module.css';


/**
 * @module Spinbutton
 * 
 * @description A Spinbutton is used to adjust a value by either clicking on the up or down button,
 *              or by scrolling the mouse wheel, causing the value to change
 * 
 * @param {enum} [buttonPosition=wrapped] - The position of the buttons <br>
 *        **Enums:** `wrapped` `top` `left` `right` `bottom`
 * @param {enum} [buttonOrientation=vertical] - The orientation of the buttons <br>
 *        **Enums:** `horizontal` `vertical`
 * @param {string} [buttonSize] - The size of the buttons
 * @param {string} [upIcon=caret up] - The icon on the 'up' button
 * @param {string} [downIcon=caret down] - The icon on the 'down' button
 * @param {function} [onUp] - Called on increasing the value
 * @param {function} [onDown] - Called on decreasing the value
 * @param {function} [onWheel] - Called on turning the mouse wheel
 * @param {string} [className] - Additional classes
 * @param {boolean} [disabled] - A Spinbutton can show that it is disabled
 * @param {boolean} [upDisabled] - An 'up' button can show that it is disabled
 * @param {boolean} [downDisabled] - A 'down' button can show that it is disabled
 */
export default ({
    buttonPosition = 'wrapped',
    buttonOrientation = 'vertical',
    buttonSize,
    upIcon = 'caret up',
    downIcon = 'caret down',
    onUp,
    onDown,
    onWheel,
    className,
    disabled,
    upDisabled,
    downDisabled,
    children,
    ...props
}) => {
    // Get references to button components
    const buttonUpRef = useRef();
    const buttonDownRef = useRef();

    // Determine content orientation
    const contentOrientation =
        (buttonPosition === 'left' || buttonPosition === 'right') ? 'horizontal' :
            (buttonPosition === 'top' || buttonPosition === 'bottom') ? 'vertical' :
                buttonOrientation;

    // Merge class names
    const wrapperClassName = classNames(
        className,
        styles.spinbutton,
        styles[contentOrientation],
        { [styles[buttonPosition]]: (buttonPosition !== 'wrapped') }
    );
    const buttonsClassName = classNames(
        styles.buttons,
        styles[buttonOrientation]
    );

    // Prevent default scroll behavior on wheel event
    useEffect(() => {
        if (onWheel === undefined) return;

        buttonUpRef.current.ref.current.addEventListener('wheel', event => { event.preventDefault(); });
        buttonDownRef.current.ref.current.addEventListener('wheel', event => { event.preventDefault(); });
    }, []);

    const ButtonUp = (
        <Button
            type='button'
            className={styles.up}
            size={buttonSize}
            icon={upIcon}
            onClick={onUp}
            onWheel={onWheel}
            ref={buttonUpRef}
            disabled={upDisabled || disabled}
        />
    );
    const ButtonDown = (
        <Button
            type='button'
            className={styles.down}
            size={buttonSize}
            icon={downIcon}
            onClick={onDown}
            onWheel={onWheel}
            ref={buttonDownRef}
            disabled={downDisabled || disabled}
        />
    );

    return (
        <div {...props} className={wrapperClassName}>
            {(buttonPosition === 'top' || buttonPosition === 'left') ? (
                <React.Fragment>
                    <div className={buttonsClassName}>
                        {ButtonUp}
                        {ButtonDown}
                    </div>
                    {children}
                </React.Fragment>
            ) : (buttonPosition === 'right' || buttonPosition === 'bottom') ? (
                <React.Fragment>
                    {children}
                    <div className={buttonsClassName}>
                        {ButtonUp}
                        {ButtonDown}
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {ButtonUp}
                    {children}
                    {ButtonDown}
                </React.Fragment>
            )}
        </div>
    );
}
