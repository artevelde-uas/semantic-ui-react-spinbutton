import React from 'react';
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
    const contentOrientation =
        (position === 'left' || position === 'right') ? 'horizontal' :
            (position === 'top' || position === 'bottom') ? 'vertical' :
                orientation;
    const contentClassName = classNames(
        className,
        styles.spinner,
        styles[contentOrientation]
    );
    const buttonsClassName = classNames(
        styles.buttons,
        styles[position],
        styles[orientation]
    );

    function refHandler(node) {
        // Get a reference to the current native BUTTON element
        const button = node?.ref.current;

        // Handle the wheel event on the real BUTTON element
        button && (button.onwheel = event => {
            event.preventDefault();
        });
    }

    const ButtonUp = (
        <Button
            className={styles.up}
            icon='caret up'
            onClick={onUp}
            onWheel={onWheel}
            ref={onWheel && refHandler}
            disabled={disabled}
        />
    );
    const ButtonDown = (
        <Button
            className={styles.down}
            icon='caret down'
            onClick={onDown}
            onWheel={onWheel}
            ref={onWheel && refHandler}
            disabled={disabled}
        />
    );

    return (
        <div {...props} className={contentClassName}>
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
