import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import ModalImage from '../../components/atoms/ModalImage';
import ModalMap from '../../components/atoms/ModalMap';
import Post from '../../components/molecules/Post';
import Header from '../../components/atoms/Header';
import useModals from '../../hooks/useModals';
import useComments from '../../hooks/useComments';
import styles from './styles';
import CardData from '../../components/atoms/CardData';
import InputComment from '../../components/atoms/InputComment';
import useFormData from '../../hooks/useFormData';
import initialValues from '../../const/initialValues';
import Form from '../../models/Form';
import DataNotFound from '../../components/atoms/DataNotFound';

function CommentsList({comments, text, navigation}) {
  if (comments.data.length === 0 && comments.finish === true) {
    return (
      <DataNotFound
        title={'No hay comentarios'}
        text={'Se el primero en compartir tu opinión.'}
      />
    );
  }
  return (
    <FlatList
      data={comments.data}
      renderItem={({item}) => (
        <CardData
          data={item}
          text={text}
          comments={comments}
          navigation={navigation}
        />
      )}
    />
  );
}

export default function CommentsScreen({navigation, route}) {
  const comments = useComments(route.params.data.idDoc);
  const text = useFormData(new Form(initialValues.initialComment));
  const modals = useModals(
    {i: 0, a: {}, v: false},
    route.params.data.ubicacion,
  );
  return (
    <View style={styles.container}>
      <ModalImage modals={modals} />
      <ModalMap modals={modals} changePost={false} />
      <Header text={'Comentarios'} navigation={navigation} />
      <ScrollView>
        <Post
          navigation={navigation}
          data={route.params.data}
          modals={modals}
        />
        <ScrollView horizontal={true}>
          <View style={styles.containerList}>
            <CommentsList
              comments={comments}
              text={text}
              navigation={navigation}
            />
            <View style={styles.bottom} />
          </View>
        </ScrollView>
      </ScrollView>
      <InputComment
        text={text}
        postid={route.params.data.idDoc}
        comments={comments}
      />
    </View>
  );
}
