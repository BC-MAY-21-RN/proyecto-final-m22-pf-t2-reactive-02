import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import InputConfiguration from '../../atoms/inputConfiguration';
import useFormData from '../../../hooks/useFormData';
import functions from './functions';

export default function ConfigurationContent({photo, name, setName}) {
  const form = useFormData({object: {}});
  const data = functions.dataFunction();

  return (
    <View style={styles.container}>
      {data.map(function (obj, i) {
        return (
          <InputConfiguration
            key={i}
            title={obj.title}
            Icon={obj.Icon}
            visibleIcon={true}
            changeUser={form.handleData}
            keyObj={obj.keyObj}
          />
        );
      })}
      <TouchableOpacity
        style={styles.guardar}
        onPress={() => {
          functions.createObject(photo, form.dataForm.object, setName, name);
        }}>
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
