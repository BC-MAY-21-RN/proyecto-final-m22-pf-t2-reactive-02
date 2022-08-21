import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import colors from '../../../const/colors';

export default function Button({text, onPress, style, disabled, children}) {
  return (
    <TouchableOpacity
      disabled={!disabled}
      style={{
        ...style.btn,
        ...(!disabled ? {backgroundColor: colors.disabledpink} : null),
      }}
      onPress={onPress}>
      {children}
      <Text style={style.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
}
