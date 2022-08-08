import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import ButtonsPost from '../../atoms/ButtonsPost';
import UserPost from '../../atoms/UserPost';
//import Location from '../../atoms/Location';
import styles from './styles';
import Carousel from '../../atoms/Carousel';
import ModalImage from '../../atoms/ModalImage';

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

const location = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.09,
  longitudeDelta: 0.04,
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
    <View style={{position: 'absolute', right: 16, top: 10}}>
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
  setImage,
  setLocation,
  setShowMap,
  setShowImage,
}) {
  return (
    <Card containerStyle={styles.card}>
      <LocationButton
        data={data}
        setLocation={setLocation}
        setShowMap={setShowMap}
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
          setImage={setImage}
          setShowImage={setShowImage}
        />
        <ButtonsPost navigation={navigation} data={data} />
      </View>
    </Card>
  );
}

/*
changev={changev} changei={changei}


  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const changev = value => setVisible(value);
  const changei = value => setIndex(value);

      <ModalImage
        changeVisible={changev}
        values={{a: jsonImgs(data.listaUrl), i: index, v: visible}}
      />
*

/*{false ? <Location city={'Manzanillo'} state={'Colima'} /> : null}
<Text style={styles.text}>{data.texto}</Text>
{data.listaUrl.length === 0 ? null : (
  <Carousel arrayImages={data.listaUrl} />
)}*/

//         <Carousel arrayImages={data.listaUrl} />
