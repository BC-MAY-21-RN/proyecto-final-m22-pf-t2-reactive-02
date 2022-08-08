import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PagerView from 'react-native-pager-view';
import styles from './styles';

const showImages = (index, changei, changev) => {
  changei(index);
  changev(true);
};

export default function Carousel({array, changev, changei}) {
  const [position, setPosition] = useState(0);
  const newPos = e => setPosition(e.nativeEvent.position);
  return (
    <View style={styles().container}>
      <PagerView onPageScroll={e => newPos(e)} style={styles().pager}>
        {array.map((url, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => showImages(position, changei, changev)}>
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
