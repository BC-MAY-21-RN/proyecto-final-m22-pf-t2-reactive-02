import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
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
