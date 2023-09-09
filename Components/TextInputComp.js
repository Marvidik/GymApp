import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

const AnimatedTextInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.focusedInput,
        ]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Your text here"
        placeholderTextColor={isFocused ? 'white' : '#A0A0A0'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,

  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 2,
    borderColor: '#333',
    paddingHorizontal: 10,
    color: 'white', // Default text color
  },
  focusedInput: {
    color: '#DBFF33', // Text color when focused
  },
});

export default AnimatedTextInput;
