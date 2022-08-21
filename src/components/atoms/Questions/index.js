import React from 'react';
import {View, Text} from 'react-native';
import Select from 'react-native-select-dropdown';
import Input from '../Input';
import styles from './styles';

const props = {
  style: styles.input,
  keyboardType: 'numeric',
  placeholder: '0',
};

export default function Questions({text, data, type, keyObj, changeInput}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {type === 'select' ? (
        <Select
          data={data}
          buttonStyle={styles.input}
          defaultButtonText={'Seleccione una opción'}
          buttonTextStyle={styles.selectText}
          rowTextStyle={styles.dropdown}
          onSelect={value => changeInput({[keyObj]: value})}
        />
      ) : (
        <Input
          type={'normal'}
          props={props}
          keyObj={keyObj}
          changeInput={changeInput}
        />
      )}
    </View>
  );
}
