import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/molecules/Post';
import Comments from '../../components/atoms/Comments';
import Header from '../../components/atoms/header';
import {ScrollView} from 'react-native-gesture-handler';
import NotificationComponent from '../../components/atoms/NotificationComponent';
import fireBaseDataConsult from './functions';
import styles from './styles';

export default function CommentsScreen({navigation, route}) {
  const [getData, setGetData] = useState([]);
  const [newComment, setNewCommet] = useState(false);
  const changeGetData = comments => setGetData(comments);

  useEffect(() => {
    fireBaseDataConsult(changeGetData);
  }, [newComment]);
  return (
    <View style={styles.container}>
      <Header text={'Comentarios'} navigation={navigation} />
      <ScrollView>
        <Post navigation={navigation} data={route.params.data} />
        <ScrollView horizontal={true}>
          <View style={styles.containerList}>
            <FlatList
              data={getData}
              renderItem={({item}) => (
                <View>
                  <NotificationComponent data={item} />
                </View>
              )}
            />
          </View>
        </ScrollView>
      </ScrollView>
      <Comments newComment={newComment} setNewCommet={setNewCommet} />
    </View>
  );
}
