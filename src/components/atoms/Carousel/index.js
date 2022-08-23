import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PagerView from 'react-native-pager-view';
import useStateHook from '../../../hooks/useStateHook';
import styles from './styles';
import helpers from '../../../utils/helpers';

const showImages = (index, handleUrlImgs, handleImgsVisible, array) => {
  const jsonImages = {i: index, a: helpers.jsonImgs(array)};
  handleUrlImgs(jsonImages);
  handleImgsVisible(true);
};

export default function Carousel({array, handleUrlImgs, handleImgsVisible}) {
  const pos = useStateHook(0);
  return (
    <View style={styles(array.length === 0 ? 0 : 200).container}>
      <PagerView
        onPageScroll={e => pos.changeState(e.nativeEvent.position)}
        style={styles().pager}>
        {array.map((url, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() =>
                showImages(pos.state, handleUrlImgs, handleImgsVisible, array)
              }>
              <Image source={{uri: url}} style={styles().img} />
            </TouchableOpacity>
          </View>
        ))}
      </PagerView>
      <View style={styles().pagination}>
        {array.map((_, k) => (
          <Text key={k} style={styles(k, pos.state).point}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}
