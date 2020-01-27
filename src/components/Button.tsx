import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { t } from 'react-native-tailwindcss';

import { styles, colors } from '../styles';

type ButtonProps = {
  label: string;
  onPress: any;
  variant?: string;
  style?: any;
};

const colorVariant = (variant: string) => {
  switch (variant) {
    case 'primary':
      return colors.primary;
    case 'secondary':
      return colors.secondary;
    default:
      return 'black';
  }
};

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        props.style,
        styles.button,
        { backgroundColor: colorVariant(props.variant) }
      ]}
    >
      <Text style={[t.textWhite, t.textCenter, t.fontBold]}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
