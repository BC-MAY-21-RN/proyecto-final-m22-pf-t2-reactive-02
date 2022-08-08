import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {View, FlatList} from 'react-native';
import AddButton from '../../components/atoms/AddButton';
import Post from '../../components/molecules/Post';
import styles from './styles';
import ModalImage from '../../components/atoms/ModalImage';
import ModalMap from '../../components/atoms/ModalMap';

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

const initLocation = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04,
};

export default function PostsScreen({navigation, route}) {
  const [getData, setGetData] = useState([]);
  const [images, setImage] = useState();
  const [location, setLocation] = useState(initLocation);
  const [showMap, setShowMap] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const changeGetData = post => setGetData(post);
  useFocusEffect(
    useCallback(() => {
      firebaseDataConsult(changeGetData, route.params.hashtag);
    }, [route.params.hashtag]),
  );
  return (
    <View style={styles.container}>
      <ModalImage visible={setShowImage} values={{...images, v: showImage}} />
      <ModalMap
        init={location}
        setMapOpen={setShowMap}
        visible={showMap}
        changePost={false}
      />
      <FlatList
        data={getData}
        renderItem={({item}) => (
          <Post
            navigation={navigation}
            data={item}
            setImage={setImage}
            setShowImage={setShowImage}
            setLocation={setLocation}
            setShowMap={setShowMap}
          />
        )}
      />
      <AddButton navigation={navigation} hashtag={route.params.hashtag} />
    </View>
  );
}
