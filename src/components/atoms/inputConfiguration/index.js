import React from 'react';
import {View, TextInput} from 'react-native';
import Icons from '../Icons';
import styles from '../../atoms/InputComponent/styles';

export default function InputComponent({
  title,
  Icon,
  visibleIcon = false,
  changeUser,
  input,
}) {
  return (
    <View style={styles.containerInput}>
      <View style={styles.iconInput}>
        {visibleIcon ? (
          <Icons
            IconProp={Icon}
            style={{...styles.icon, ...{marginLeft: 20}}}
          />
        ) : null}
        <TextInput
          placeholder={title}
          style={styles.input}
          onChange={e => changeUser(e.nativeEvent.text, input)}
        />
      </View>
    </View>
  );
}
