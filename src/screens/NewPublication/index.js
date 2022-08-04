import React, {useState} from 'react';
import {View} from 'react-native';
import NewPost from '../../models/NewPost';
import ModalImage from '../../components/atoms/ModalImage';
import NewPostForm from '../../components/molecules/NewPostForm';
import Loading from '../../components/atoms/Loading';

const newObject = (object, key, value) => {
  object.setValues({[key]: value});
  return new NewPost(
    object.valuesPost.hashtags,
    object.valuesPost.text,
    object.valuesPost.images,
    object.valuesPost.location,
  );
};

export default function NewPublication({navigation, route}) {
  const [post, setPost] = useState(new NewPost(route.params.hashtag));
  const [imageOpen, setImageOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [indexImage, setIndexImage] = useState(0);
  const changePost = (value, key) => setPost(newObject(post, key, value));
  const changeImageOpen = value => setImageOpen(value);
  const changeIndexImage = value => setIndexImage(value);
  const changeLoading = value => setLoading(value);

  return (
    <View>
      <Loading isvisible={loading} />
      <NewPostForm
        changePost={changePost}
        navigation={navigation}
        route={route}
        post={post}
        changeIndex={changeIndexImage}
        changeVisible={changeImageOpen}
        changeLoading={changeLoading}
      />
      <ModalImage
        changeVisible={changeImageOpen}
        values={{i: indexImage, v: imageOpen, a: post.valuesPost.images}}
      />
    </View>
  );
}
