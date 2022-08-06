import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {Card} from 'react-native-elements';
import ButtonsPost from '../../atoms/ButtonsPost';
import UserPost from '../../atoms/UserPost';
import Location from '../../atoms/Location';
import styles from './styles';
import Carousel from '../../atoms/Carousel';

const {width} = Dimensions.get('window');
const height = 300;
/*const images = [
  'https://www.hogarmania.com/archivos/202202/gato-esfinge-portada-1280x720x80xX.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNenjnSNt_2L4Y16-zlFrh5GEl7Owc37MyUg&usqp=CAU',
];*/

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

export default function Post({navigation, data}) {
  return (
    <Card style={styles.container} containerStyle={{marginHorizontal: 4}}>
      <View>
        <UserPost
          name={data.nombreusuario}
          time={dateToString(data)}
          image={data.fotousuario}
        />
        <Text style={styles.text}>{data.texto}</Text>
        <Carousel arrayImages={data.listaUrl} change={() => {}} />
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