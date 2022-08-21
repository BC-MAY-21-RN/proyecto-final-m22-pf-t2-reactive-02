import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Icon, Overlay} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

export default function Header({text, navigation, filter, color}) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(false);
  };

  const Filterer = () => {
    return (
      <Overlay
        overlayStyle={styles().overlay}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      />
    );
  };
  return (
    <View>
      <View style={styles(color).container}>
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate('Home', {hashtag: '#Normal'});
            }
          }}>
          <Icon name="arrowleft" type="antdesign" style={styles().icon} />
        </TouchableOpacity>
        <Text style={styles().text}>{text}</Text>
        {filter && (
          <TouchableOpacity
            style={styles().containerIcon}
            onPress={() => {
              setVisible(true);
            }}>
            <Icon
              name="ios-options-outline"
              type="ionicon"
              style={styles().iconOption}
              size={30}
            />
          </TouchableOpacity>
        )}
      </View>
      {filter ? <Filterer /> : null}
    </View>
  );
}
