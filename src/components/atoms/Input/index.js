import React from 'react';
import {TextInput, View} from 'react-native';
import useStateHook from '../../../hooks/useStateHook';
import Alert from './Alert';
import PasswordIcon from './PasswordIcon';
import Icons from '../Icons';
import styles from './styles';

export default function Input({
  type,
  title,
  Icon,
  isPassword = false,
  visibleAlert = false,
  keyObj,
  changeInput,
  props,
}) {
  const visible = useStateHook(isPassword);

  if (type === 'normal') {
    return (
      <TextInput
        {...props}
        onChange={e => changeInput({[keyObj]: e.nativeEvent.text})}
      />
    );
  }

  return (
    <View style={styles.containerInput}>
      {visibleAlert ? <Alert title={title} /> : null}
      <View style={styles.iconInput}>
        <Icons IconProp={Icon} styles={styles.icon} />
        <TextInput
          placeholder={title}
          style={styles.input}
          secureTextEntry={visible.state}
          onChange={e => changeInput({[keyObj]: e.nativeEvent.text})}
        />
      </View>
      {isPassword ? <PasswordIcon visible={visible} /> : null}
    </View>
  );
}
