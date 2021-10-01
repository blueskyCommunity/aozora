import React, { useState } from 'react';
import { Box, Text } from 'elemental-react';

// const fakeEventTarget = new EventTarget();
// fakeEventTarget.target.name = '123';

const InputField = ({ label, onFocus, onBlur, labelVisible, placeholder, error, value = '', children, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocusChange = (status, e) => {
    if (status && onFocus) {
      onFocus(e);
    } else if (!status && onBlur) {
      onBlur(e);
    }

    setIsFocused(status);
  };

  return (
    <Box width="100%" flexDirection="column" {...props}>
      <Box mb={2} opacity={((label && value.length > 0) || isFocused || labelVisible) ? 1 : 0}>
        <Text fontSize={16} color="gray">
          {label}
        </Text>
      </Box>
      <Box>
        {React.isValidElement(children) ? children : children({ label, placeholder: isFocused ? '' : placeholder || label, error, value, onFocusChange })}
      </Box>
      <Box height={16} mt={1} opacity={error ? 1 : 0}>
        <Text fontSize={12} color="red">
          {error}
        </Text>
      </Box>
    </Box>
  );
};

export default InputField;