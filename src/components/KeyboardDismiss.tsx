import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const KeyboardDismiss = (props: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {props.children}
  </TouchableWithoutFeedback>
);

export default KeyboardDismiss;
