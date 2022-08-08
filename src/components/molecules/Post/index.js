import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import ButtonsPost from '../../atoms/ButtonsPost';
import UserPost from '../../atoms/UserPost';
import Location from '../../atoms/Location';
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

const jsonImgs = data => {
  const array = data.map(url => ({url: url}));
  return array;
};

export default function Post({navigation, data}) {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const changev = value => setVisible(value);
  const changei = value => setIndex(value);
  return (
    <Card containerStyle={{marginHorizontal: 4}}>
      <ModalImage
        changeVisible={changev}
        values={{a: jsonImgs(data.listaUrl), i: index, v: visible}}
      />
      <View>
        <UserPost
          name={data.nombreusuario}
          time={dateToString(data)}
          image={data.fotousuario}
        />
        <Text style={styles.text}>{data.texto}</Text>
        <Carousel array={data.listaUrl} changev={changev} changei={changei} />
        <ButtonsPost navigation={navigation} data={data} />
      </View>
    </Card>
  );
}

/*{false ? <Location city={'Manzanillo'} state={'Colima'} /> : null}
<Text style={styles.text}>{data.texto}</Text>
{data.listaUrl.length === 0 ? null : (
  <Carousel arrayImages={data.listaUrl} />
)}*/

//         <Carousel arrayImages={data.listaUrl} />
