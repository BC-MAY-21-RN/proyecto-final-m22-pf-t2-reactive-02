import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PagerView from 'react-native-pager-view';
import styles from './styles';

const jsonImgs = data => {
  const array = data.map(url => ({url: url}));
  return array;
};

const showImages = (index, setImage, setShowImage, array) => {
  const changeShowImage = () => setShowImage(true);
  const setValuesImages = values => setImage(values);
  const jsonImages = {i: index, a: jsonImgs(array)};
  changeShowImage();
  setValuesImages(jsonImages);
};

export default function Carousel({array, setImage, setShowImage}) {
  const [position, setPosition] = useState(0);
  const newPos = e => setPosition(e.nativeEvent.position);
  return (
    <View style={styles().container}>
      <PagerView onPageScroll={e => newPos(e)} style={styles().pager}>
        {array.map((url, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() =>
                showImages(position, setImage, setShowImage, array)
              }>
              <Image source={{uri: url}} style={styles().img} />
            </TouchableOpacity>
          </View>
        ))}
      </PagerView>
      <View style={styles().pagination}>
        {array.map((_, k) => (
          <Text key={k} style={styles(k, position).point}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
}
