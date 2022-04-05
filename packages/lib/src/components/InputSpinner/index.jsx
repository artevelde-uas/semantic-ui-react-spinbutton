import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'semantic-ui-react';
import classNames from 'classnames';

import { useUpdateEffect } from 'react-use';
import Spinbutton from '../Spinbutton';

import styles from './index.module.css';


/**
 * @module InputSpinner
 * 
 * @description An InputSpinner is used to adjust a value in an adjoining text box
 *              by either clicking on the up or down button, by scrolling the mouse wheel,
 *              or by pressing the up or down key, causing the value to change
 * 
 * @param {enum} [buttonPosition=right] - The position of the buttons <br>
 *        **Enums:** `wrapped` `top` `left` `right` `bottom`
 * @param {enum} [buttonOrientation=vertical] - The orientation of the buttons <br>
 *        **Enums:** `horizontal` `vertical`
 * @param {string} [buttonSize] - The size of the buttons
 * @param {string} [upIcon=caret up] - The icon on the 'up' button
 * @param {string} [downIcon=caret down] - The icon on the 'down' button
 * @param {function} [onUp] - Called on increasing the value
 * @param {function} [onDown] - Called on decreasing the value
 * @param {function} [onChange] - Called on changing the value
 * @param {function} [onWheel] - Called on turning the mouse wheel
 * @param {function} [onKeyDown] - Called on pressing a key
 * @param {string} [formatter] - A function to transform the value before displaying
 * @param {string} [className] - Additional classes
 * @param {boolean} [disabled] - A Spinbutton can show that it is disabled
 * @param {boolean} [upDisabled] - An 'up' button can show that it is disabled
 * @param {boolean} [downDisabled] - A 'down' button can show that it is disabled
 */
export default ({
    name,
    value: defaultValue = '',
    buttonPosition = 'right',
    buttonOrientation = 'vertical',
    buttonSize,
    upIcon,
    downIcon,
    onUp,
    onDown,
    onChange,
    onInput,
    onWheel,
    onKeyDown,
    formatter,
    className,
    disabled,
    upDisabled,
    downDisabled,
    style,
    ...props
}) => {
    // Get reference to input component
    const inputRef = useRef();
    const hiddenInputRef = useRef();

    // Store the input value
    const [value, setValue] = useState(defaultValue);
    const [isFocused, setFocused] = useState(false);

    // Merge class names
    const wrapperClassName = classNames(
        className,
        styles.inputspinner,
        { [styles.top]: (buttonPosition === 'top' || (buttonPosition === 'wrapped' && buttonOrientation === 'vertical')) },
        { [styles.left]: (buttonPosition === 'left' || (buttonPosition === 'wrapped' && buttonOrientation === 'horizontal')) },
        { [styles.right]: (buttonPosition === 'right' || (buttonPosition === 'wrapped' && buttonOrientation === 'horizontal')) },
        { [styles.bottom]: (buttonPosition === 'bottom' || (buttonPosition === 'wrapped' && buttonOrientation === 'vertical')) }
    );

    // Prevent default scroll behavior on wheel event
    useEffect(() => {
        inputRef.current.inputRef.current.addEventListener('wheel', event => { event.preventDefault(); });
    }, []);

    // Fire input event when value changes
    useUpdateEffect(() => {
        const event = new Event('input', { bubbles: true });

        hiddenInputRef.current.dispatchEvent(event);
    }, [value]);

    function handleUp(event) {
        onUp && setValue(onUp(value, event) ?? value);
    }

    function handleDown(event) {
        onDown && setValue(onDown(value, event) ?? value);
    }

    function handleInput(event) {
        setValue(event.target.value);
    }

    function handleHiddenInput(event) {
        // Fire the input event
        onInput && onInput(event);
        onChange && onChange(event);

        if (onChange) {
            // Change synthetic event type
            event._reactName = 'onChange';
            event.type = 'change';

            // Fire the change event
            onChange(event);
        }
    }

    function handleWheel(event) {
        if (onWheel) {
            onWheel(event);

            return;
        }

        (event.deltaY < 0) ? handleUp(event) : handleDown(event);
    }

    function handleKey(event) {
        if (onKeyDown) {
            onKeyDown(event);

            return;
        }

        // Don't handle '+' and '-' keys when input is focused
        if (!props.readOnly && isFocused && ['+', '-'].includes(event.key)) return;

        switch (event.key) {
            case 'ArrowUp':
            case '+':
                handleUp(event);
                break;
            case 'ArrowDown':
            case '-':
                handleDown(event);
                break;
        }
    }

    function handleFocus(event) {
        setFocused(true);
    }

    function blurHandler(event) {
        setFocused(false);
    }

    return (
        <Spinbutton
            className={wrapperClassName}
            buttonPosition={buttonPosition}
            buttonOrientation={buttonOrientation}
            buttonSize={buttonSize || props.size}
            upIcon={upIcon}
            downIcon={downIcon}
            onUp={handleUp}
            onDown={handleDown}
            onWheel={handleWheel}
            disabled={disabled}
            upDisabled={upDisabled}
            downDisabled={downDisabled}
            style={style}
        >
            <Input {...props}
                value={(formatter && !isFocused && (value !== '')) ? formatter(value) : value}
                onInput={handleInput}
                onKeyDown={handleKey}
                onWheel={handleWheel}
                onFocus={handleFocus}
                onBlur={blurHandler}
                ref={inputRef}
                disabled={disabled}
                fluid
            />
            <input
                type='hidden'
                name={name}
                value={value}
                ref={hiddenInputRef}
                onInput={handleHiddenInput}
            />
        </Spinbutton>
    );
}
