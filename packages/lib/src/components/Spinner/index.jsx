import React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

import styles from './index.module.css';


export default ({
    contentPosition = 'center',
    buttonOrientation = 'vertical',
    onUp,
    onDown,
    onWheel,
    className,
    disabled,
    children,
    ...props
}) => {
    const contentOrientation =
        (contentPosition === 'left' || contentPosition === 'right') ? 'horizontal' :
            (contentPosition === 'top' || contentPosition === 'bottom') ? 'vertical' :
                buttonOrientation;
    const contentClassName = classNames(
        className,
        styles.spinner,
        styles[contentOrientation]
    );
    const buttonsClassName = classNames(
        styles.buttons,
        styles[buttonOrientation]
    );

    function onRef(node) {
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
            ref={onWheel && onRef}
            disabled={disabled}
        />
    );
    const ButtonDown = (
        <Button
            className={styles.down}
            icon='caret down'
            onClick={onDown}
            onWheel={onWheel}
            ref={onWheel && onRef}
            disabled={disabled}
        />
    );

    return (
        <div {...props} className={contentClassName}>
            {(contentPosition === 'center') ? (
                <React.Fragment>
                    {ButtonUp}
                    {children}
                    {ButtonDown}
                </React.Fragment>
            ) : (contentPosition === 'top' || contentPosition === 'left') ? (
                <React.Fragment>
                    {children}
                    <div className={buttonsClassName}>
                        {ButtonUp}
                        {ButtonDown}
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div className={buttonsClassName}>
                        {ButtonUp}
                        {ButtonDown}
                    </div>
                    {children}
                </React.Fragment>
            )}
        </div>
    );
}
