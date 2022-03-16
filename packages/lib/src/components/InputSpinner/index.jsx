import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'semantic-ui-react';
import classNames from 'classnames';

import { useUpdateEffect } from '../../util';
import Spinbutton from '../Spinbutton';

import styles from './index.module.css';


export default ({
    name,
    value: defaultValue = '',
    buttonPosition = 'right',
    buttonOrientation = 'vertical',
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
            position={buttonPosition}
            orientation={buttonOrientation}
            buttonSize={props.size}
            onUp={handleUp}
            onDown={handleDown}
            onWheel={handleWheel}
            disabled={disabled}
            upDisabled={upDisabled}
            downDisabled={downDisabled}
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
