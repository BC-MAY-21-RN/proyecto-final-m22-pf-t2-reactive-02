import React from 'react';
import {View, Text} from 'react-native';
import {Overlay} from 'react-native-elements/dist/overlay/Overlay';
import styles from './styles';
import texts from '../../../const/texts';

export default function Help({overlay}) {
  return (
    <Overlay
      isVisible={overlay.state}
      onBackdropPress={() => overlay.changeState(false)}>
      <View style={styles.container}>
        {texts.helpTexts.map((element, i) => (
          <View key={i}>
            <Text style={styles.title}>{element.title}</Text>
            <Text style={styles.text}>{element.text}</Text>
            {element.example !== undefined ? (
              <Text style={styles.text2}>{element.example}</Text>
            ) : null}
          </View>
        ))}
      </View>
    </Overlay>
  );
}
