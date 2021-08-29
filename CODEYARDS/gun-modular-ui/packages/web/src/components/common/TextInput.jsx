import React, { useEffect, useState } from 'react';

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

export default _TextInput;
