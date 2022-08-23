import React from 'react';
import Button from '../../components/atoms/Button';
import styles from './styles';
import {View, FlatList, ScrollView, ActivityIndicator} from 'react-native';
import TopBar from '../../components/atoms/TopBar';
import Post from '../../components/molecules/Post';
import ModalImage from '../../components/atoms/ModalImage';
import ModalMap from '../../components/atoms/ModalMap';
import functions from './functions';
import usePost from '../../hooks/usePost';
import useModals from '../../hooks/useModals';
import colors from '../../const/colors';
import initialValues from '../../const/initialValues';
import DataNotFound from '../../components/atoms/DataNotFound';
import Header from '../../components/atoms/Header';

const ListPost = ({posts, modals, hashtag, navigation}) => {
  if (posts.data.length === 0 && posts.finish === true) {
    return (
      <View style={styles.notfound}>
        <DataNotFound title={'No hay Publicaciones'} text={''} />
      </View>
    );
  }
  return (
    <FlatList
      data={posts.data}
      renderItem={({item, index}) => (
        <Post
          navigation={navigation}
          data={item}
          reload={posts.reload}
          modals={modals}
          hashtag={hashtag}
          posts={posts}
        />
      )}
    />
  );
};

export default function PostsScreen({navigation, route}) {
  const posts = usePost(route.params);
  const modals = useModals({i: 0, a: {}, v: false}, initialValues.initLocation);

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} iconVisible={true} />
      {route.params.goback === true ? (
        <Header navigation={navigation} color={'#fff'} text={'Búsqueda'} />
      ) : null}
      <ModalImage modals={modals} />
      <ModalMap modals={modals} changePost={false} />
      <ScrollView style={styles.scroll}>
        <ScrollView
          horizontal={true}
          scrollEnabled={false}
          contentContainerStyle={styles.scroll}>
          <ListPost
            posts={posts}
            modals={modals}
            hashtag={route.params.hashtag}
            navigation={navigation}
          />
        </ScrollView>
      </ScrollView>
      {posts.finish ? null : (
        <ActivityIndicator size="large" color={colors.pink} />
      )}
      {route.params.goback === true ? null : (
        <Button
          text={'+'}
          style={styles}
          disabled={true}
          onPress={() => functions.onPress(navigation, route.params.hashtag)}
        />
      )}
    </View>
  );
}
