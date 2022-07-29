import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import functions from '../../components/atoms/DrawerItems/functions';
import styles from './styles';
import * as ImagePicker from 'react-native-image-picker';
import {Icon} from 'react-native-elements';
import UserProfileInfo from '../../components/atoms/UserProfileInfo';
import InfoUser from '../../components/InfoUser';

export default function ProfileScreen() {
  const [name, setName] = useState(functions.VerifyName());
  const [photo, setPhoto] = useState(functions.VerifyPhoto());
  const user = auth().currentUser;
  const ChangeImage = () => {
    ImagePicker.launchImageLibrary();
  };
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: photo
              ? user.photoURL
              : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg',
          }}
        />
        <View style={styles.changeImage}>
          <TouchableOpacity onPress={ChangeImage}>
            <Icon name={'upload'} type={'feather'} size={30} />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{name ? user.displayName : 'Funganito'}</Text>
      </View>
      <View style={styles.container}>
        <UserProfileInfo publications={5} likes={16} saved={6} />
        <InfoUser icon={'mail'} text={'Correo'} info={user.email} />
        <InfoUser
          icon={'phone'}
          text={'Teléfono'}
          info={'Agrega un teléfono'}
        />
        <InfoUser icon={'map-pin'} text={'Ciudad'} info={'Agrega una ciudad'} />
        <InfoUser
          icon={'smile'}
          text={'Sobre ti: '}
          info={'Agrega información de ti'}
        />
        <TouchableOpacity style={styles.editar}>
          <Text>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
