import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Select from 'react-native-select-dropdown';
import styles from './styles';
import ButtonForm from '../ButtonForm';

export default function QuestionForm({text, changeField, data}) {
  const [field] = useState(changeField);
  return (
    <View style={styles.container}>
      <ButtonForm type={false} text={text} />
      <View style={styles.containerInput}>
        {field ? (
          <TextInput placeholder="0" keyboardType="numeric" />
        ) : (
          <Select
            data={data}
            buttonStyle={styles.select}
            buttonTextStyle={styles.selectText}
            defaultButtonText="Select an option"
            onSelect={(selectedItem, index) => {}}
            rowTextStyle={styles.dropdown}
          />
        )}
      </View>
    </View>
  );
}
