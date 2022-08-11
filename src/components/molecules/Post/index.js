import React from 'react';
import {View, Text} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import ButtonsPost from '../../atoms/ButtonsPost';
import UserPost from '../../atoms/UserPost';
import styles from './styles';
import Carousel from '../../atoms/Carousel';

const months = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
};

const dateToString = data => {
  const dateInt = data.fecha.seconds;
  const date = new Date(dateInt * 1000);
  return (
    '' +
    date.getDay() +
    ' ' +
    months[date.getMonth() + 1] +
    ' ' +
    date.getFullYear()
  );
};

const LocationButton = ({data, setLocation, setShowMap}) => {
  const changeShowMap = () => setShowMap(true);
  const changeLocationMap = () => setLocation(data.ubicacion);
  return (
    <View style={styles.locationbutton}>
      {data.ubicacion.latitude === 0 &&
      data.ubicacion.longitude === 0 ? null : (
        <Icon
          name="map-marker"
          type="material-community"
          color="#517fa4"
          onPress={() => {
            changeLocationMap();
            changeShowMap();
          }}
        />
      )}
    </View>
  );
};

export default function Post({
  navigation,
  data,
  imagesFunctions,
  mapFunctions,
}) {
  return (
    <Card containerStyle={styles.card}>
      <LocationButton
        data={data}
        setLocation={mapFunctions.setLocation}
        setShowMap={mapFunctions.setShowMap}
      />
      <View>
        <UserPost
          name={data.nombreusuario}
          time={dateToString(data)}
          image={data.fotousuario}
        />
        <Text style={styles.text}>{data.texto}</Text>
        <Carousel
          array={data.listaUrl}
          setImage={imagesFunctions.setImage}
          setShowImage={imagesFunctions.setShowImage}
        />
        <ButtonsPost navigation={navigation} data={data} />
      </View>
    </Card>
  );
}
