import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/molecules/Post';
import Comments from '../../components/atoms/Comments';
import Header from '../../components/atoms/header';
import {ScrollView} from 'react-native-gesture-handler';
import NotificationComponent from '../../components/atoms/NotificationComponent';
import fireBaseDataConsult from './functions';
import styles from './styles';
import ModalImage from '../../components/atoms/ModalImage';
import ModalMap from '../../components/atoms/ModalMap';

export default function CommentsScreen({navigation, route}) {
  const [getData, setGetData] = useState([]);
  const [newComment, setNewCommet] = useState(false);
  const changeGetData = comments => setGetData(comments);
  const [images, setImage] = useState();
  const [location, setLocation] = useState(route.params.data.ubicacion);
  const [showMap, setShowMap] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [text, setText] = useState({text: ''});

  useEffect(() => {
    fireBaseDataConsult(changeGetData, route.params.data.idDoc);
  }, [newComment, route.params.data.idDoc]);

  return (
    <View style={styles.container}>
      <Header text={'Comentarios'} navigation={navigation} />
      <ScrollView>
        <ModalImage visible={setShowImage} values={{...images, v: showImage}} />
        <ModalMap
          init={location}
          setMapOpen={setShowMap}
          visible={showMap}
          changePost={false}
        />
        <Post
          navigation={navigation}
          data={route.params.data}
          imagesFunctions={{setImage, setShowImage}}
          mapFunctions={{setShowMap, setLocation}}
        />
        <ScrollView horizontal={true}>
          <View style={styles.containerList}>
            <FlatList
              data={getData}
              renderItem={({item}) => (
                <View>
                  <NotificationComponent
                    data={item}
                    setEditComment={setEditComment}
                    setEditText={setText}
                    newComment={newComment}
                    setNewCommet={setNewCommet}
                    setGetData={setGetData}
                    getData={getData}
                  />
                </View>
              )}
            />
          </View>
        </ScrollView>
      </ScrollView>
      <Comments
        newComment={newComment}
        setNewCommet={setNewCommet}
        editComment={editComment}
        data={text}
        setInput={setText}
        postId={route.params.data.idDoc}
      />
    </View>
  );
}
