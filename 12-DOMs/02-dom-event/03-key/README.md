## Events

Three kind of key events

## keydown: when is down

- This is the first event in the keypress sequence.
  It fires continuously if the key is held down, which - allows for detecting key repeats.
- Captures special keys like Shift, Ctrl, Alt, Arrow keys, etc.
- Commonly used to capture input before the actual character is entered into the input field.

## keypress: when key is pressed

The keypress event is fired when a key is pressed down on the keyboard and a character is generated.

- It’s similar to keydown, but it only triggers for keys that produce a character (e.g., letters, numbers).
- Deprecated: keypress is deprecated and may not be supported in all modern browsers. It's recommended to use keydown or keyup instead.

It fires when the character is entered.

## keyup: when key is released

The keyup event is fired when a key is released after being pressed.

- This is the last event in the keypress sequence.
  It allows you to check the final state of the input after a key
- has been pressed and released.
- Useful for scenarios where you want to know the final input value after the user finishes pressing a key.
