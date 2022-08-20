import React from 'react';
import {View, TextInput} from 'react-native';
import Icons from '../Icons';
import styles from '../../atoms/Input/styles';

export default function InputConfiguration({
  title,
  Icon,
  visibleIcon = false,
  changeUser,
  keyObj,
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
          onChange={e => changeUser({[keyObj]: e.nativeEvent.text})}
        />
      </View>
    </View>
  );
}
