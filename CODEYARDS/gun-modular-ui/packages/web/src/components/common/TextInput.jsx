import React, { useEffect, useState } from 'react';
import { Box, Line, Text } from 'elemental-react';

// TODO: Style injection system with middleware

const _TextInput = React.forwardRef(({
  onChangeText,
  onChange,
  components,
  multiline,
  overrides: { style: styleOverride } = { style: {} },
  style,
  ...props
}, ref) => {
  // const { View = 'input' } = components || {};
  const [View, setView] = useState(components?.View || 'input');

  useEffect(() => {
    if (multiline) {
      setView(components?.TextArea || 'textarea');
    } else {
      setView(components?.Input || 'input');
    }
  }, multiline);

  return (
    <View
      ref={ref}
      style={style}
      onChange={onChange || onChangeText ? ({ target: { value }}) => onChangeText(value) : undefined}
      {...props}
    />
  );
});

_TextInput.defaultProps = {
  style: { fontSize: 14, outline: 'none', borderWidth: 0 },
};

const TextInput = ({ onFocusChange, label, placeholder, error, value = '', children, ...props }) => {
  const onFocus = (e) => {
    console.log('onFocus')
    if (onFocusChange) { onFocusChange(true, e); }
  }
  const onBlur = (e) => {
    console.log('onBlur')
    if (onFocusChange) { onFocusChange(false, e); }
  }

  return (
    <Box name="InputField">
      {/* For Sketch we want to mock the placeholder */}
      <Text
        as={_TextInput}
        name="TextInputBox"
        fontSize={18}
        fontFamily="secondary"
        mb="6px"
        color={!value ? 'greys.8' : undefined}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
        borderColor={error && 'red'}
      />
    </Box>
  );
}

export default TextInput;
