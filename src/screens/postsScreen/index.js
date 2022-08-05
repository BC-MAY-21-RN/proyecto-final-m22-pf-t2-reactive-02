import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {View, FlatList} from 'react-native';
import AddButton from '../../components/atoms/AddButton';
import Post from '../../components/molecules/Post';
import styles from './styles';

function firebaseDataConsult(changeGetData, params) {
  firestore()
    .collection('posts')
    .get()
    .then(querySnapshot => {
      var dataFlight = [];
      querySnapshot.forEach(documentSnapshot => {
        dataFlight.push({
          ...documentSnapshot.data(),
          idDoc: documentSnapshot.ref.id,
        });
        changeGetData(dataFlight);
      });
    });
}

export default function PostsScreen({navigation, route}) {
  const [getData, setGetData] = useState([]);
  const changeGetData = post => setGetData(post);
  useFocusEffect(
    useCallback(() => {
      firebaseDataConsult(changeGetData, route.params.hashtag);
    }, [route.params.hashtag]),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={getData}
        renderItem={({item}) => <Post navigation={navigation} data={item} />}
      />
      <AddButton navigation={navigation} hashtag={route.params.hashtag} />
    </View>
  );
}
