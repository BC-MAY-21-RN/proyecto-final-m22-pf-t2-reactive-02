import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {View, FlatList} from 'react-native';
import AddButton from '../../components/atoms/AddButton';
import Post from '../../components/molecules/Post';
import styles from './styles';
import ModalImage from '../../components/atoms/ModalImage';
import ModalMap from '../../components/atoms/ModalMap';
import Header from '../../components/atoms/header';
import TopBar from '../../components/atoms/TopBar';

function favorites(changeGetData) {
  firestore()
    .collection('favoritos')
    .where('uidUsuario', '==', auth().currentUser.uid)
    .get()
    .then(querySnapshot => {
      var dataFlight = [];
      querySnapshot.forEach(documentSnapshot => {
        dataFlight.push({
          ...documentSnapshot.data().post,
          idDoc: documentSnapshot.data().idPost,
        });
        changeGetData(dataFlight);
      });
    });
}

function noFavorites(changeGetData, hashtagforSearch) {
  firestore()
    .collection('posts')
    .where('hashtags', 'array-contains-any', hashtagforSearch)
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

function createArray(changeGetData, hashtag) {
  const hashtags = hashtag.toString().replace(/ /g, '').split('#');
  const noNormalhashtag = hashtags.filter((_, i) => i !== 0);
  const hashtagforSearch = hashtags[1] === 'Normal' ? [''] : noNormalhashtag;

  if (hashtags[2] === 'Guardados') {
    favorites(changeGetData);
  } else {
    noFavorites(changeGetData, hashtagforSearch);
  }
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
      createArray(changeGetData, route.params.hashtag);
    }, [route.params.hashtag]),
  );
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} iconVisible={true} />
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
            imagesFunctions={{setImage, setShowImage}}
            mapFunctions={{setShowMap, setLocation}}
          />
        )}
      />
      <AddButton navigation={navigation} hashtag={route.params.hashtag} />
    </View>
  );
}
