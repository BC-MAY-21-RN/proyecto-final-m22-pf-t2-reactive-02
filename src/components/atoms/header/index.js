import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Icon, Overlay} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import FilttersPost from '../FilttersPost';

export default function Header({text, navigation, filter}) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(false);
  };

  const Filterer = () => {
    return (
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visible}
        onBackdropPress={toggleOverlay}>
        <FilttersPost />
      </Overlay>
    );
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrowleft" type="antdesign" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
        {filter && (
          <TouchableOpacity
            style={styles.containerIcon}
            onPress={() => {
              setVisible(true);
            }}>
            <Icon
              name="ios-options-outline"
              type="ionicon"
              style={styles.iconOption}
              size={30}
            />
          </TouchableOpacity>
        )}
      </View>
      {filter ? <Filterer /> : null}
    </View>
  );
}
