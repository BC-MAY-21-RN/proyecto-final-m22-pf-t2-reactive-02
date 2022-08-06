import React from 'react';
import {View, Image, TextInput} from 'react-native';

export default function InputPhoto(photo) {
  return (
    <View>
      <Image source={{uri: photo}} style={globalstyles.image} />
      <View style={styles.containerInput}>
        <TextInput
          placeholder={'Escribe un comentario...'}
          style={styles.input}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
      </View>
    </View>
  );
}
