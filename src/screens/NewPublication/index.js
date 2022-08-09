import React, {useState} from 'react';
import {View} from 'react-native';
import NewPost from '../../models/NewPost';
import ModalImage from '../../components/atoms/ModalImage';
import ModalMap from '../../components/atoms/ModalMap';
import NewPostForm from '../../components/molecules/NewPostForm';
import Loading from '../../components/atoms/Loading';

const newObject = (object, key, value) => {
  object.setValues({[key]: value});
  console.log(object);
  return new NewPost(
    object.valuesPost.hashtags,
    object.valuesPost.text,
    object.valuesPost.images,
    object.valuesPost.location,
    object.valuesPost.urlMap,
  );
};

const modal = (indexImage, imageOpen, post) => {
  return {i: indexImage, v: imageOpen, a: post.valuesPost.images};
};

/*const marker = post => {
  return post.valuesPost.location;
};*/

export default function NewPublication({navigation, route}) {
  const [post, setPost] = useState(new NewPost('#' + route.params.hashtag));
  const [iOpen, setImageOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [index, setIndexImage] = useState(0);
  const changePost = (value, key) => setPost(newObject(post, key, value));
  return (
    <View>
      <Loading isvisible={loading} />
      <ModalImage visible={setImageOpen} values={modal(index, iOpen, post)} />
      <ModalMap
        visible={mapOpen}
        setMapOpen={setMapOpen}
        init={post.valuesPost.location}
        changePost={changePost}
      />
      <NewPostForm
        changePost={changePost}
        navigation={navigation}
        post={post}
        setIndexImage={setIndexImage}
        setImageOpen={setImageOpen}
        setLoading={setLoading}
        setMapOpen={setMapOpen}
        mapOpen={mapOpen}
      />
    </View>
  );
}

/*
    This  code is incorrect and i need to refactoring some components
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
  );*/
