import React from 'react';
import {View, Text} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import ButtonsPost from '../../atoms/ButtonsPost';
import UserPost from '../../atoms/UserPost';
import styles from './styles';
import Carousel from '../../atoms/Carousel';
import helpers from '../../../utils/helpers';
import OptionsPost from './OptionsPost';
import auth from '../../../services/auth';

const LocationButton = ({data, handleLocation, handleMapVisible}) => {
  return (
    <View style={styles.locationbutton}>
      {data.ubicacion.latitude === 0 &&
      data.ubicacion.longitude === 0 ? null : (
        <Icon
          name="map-marker"
          type="material-community"
          color="#517fa4"
          onPress={() => {
            handleLocation(data.ubicacion);
            handleMapVisible(true);
          }}
        />
      )}
    </View>
  );
};

export default function Post({
  navigation,
  data,
  reload,
  modals,
  hashtag,
  posts,
}) {
  return (
    <Card containerStyle={styles.card}>
      {auth.getId() === data.uidUsuario ? (
        <OptionsPost data={data} navigation={navigation} />
      ) : null}
      <LocationButton
        data={data}
        handleLocation={modals.handleLocation}
        handleMapVisible={modals.handleMapVisible}
      />
      <View>
        <UserPost
          name={data.nombreusuario}
          time={helpers.dateToString(data)}
          image={data.fotousuario}
          id={data.uidUsuario}
          navigation={navigation}
        />
        <Text style={styles.text}>{data.texto}</Text>
        <Carousel
          array={data.listaUrl}
          handleUrlImgs={modals.handleUrlImgs}
          handleImgsVisible={modals.handleImgsVisible}
        />
      </View>
      <ButtonsPost
        data={data}
        navigation={navigation}
        reload={reload}
        posts={posts}
        hashtag={hashtag}
      />
    </Card>
  );
}
