import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Select from 'react-native-select-dropdown';
import styles from './styles';

export default function QuestionForm({text, changeField, data}) {
  const [field, setField] = useState(changeField);
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text}>{text}</Text>
      </View>
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
