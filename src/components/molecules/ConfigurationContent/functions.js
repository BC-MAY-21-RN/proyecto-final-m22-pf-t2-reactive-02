import {firebase} from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import authfunc from '../../../services/auth';
import firestore from '../../../services/firestore';
import PhoneSVG from '../../../assets/icons/phone.svg';
import LocationPinSVG from '../../../assets/icons/location_pin.svg';
import userIcon from '../../../assets/icons/Vector.svg';

const updateData = (data, dataUpdate) => {
  firestore
    .getFunction('usuarios', 'uid', '==', authfunc.getId())
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        firestore
          .updateFunction('usuarios', documentSnapshot.ref.id, undefined, data)
          .then(async () => {
            await firebase.auth().currentUser.updateProfile(dataUpdate);
            Alert.alert('Tus datos se han actualizado correctamente!');
          });
      });
    });
};

const createObject = (photo, form, setName, name) => {
  if (form.ciudad === '') {
    delete form.ciudad;
  }
  if (form.nombre === '') {
    delete form.nombre;
  } else {
    setName(form.nombre !== undefined ? form.nombre : name);
  }
  if (form.phoneNumber === '') {
    delete form.phoneNumber;
  }
  const dataUpdate = {
    displayName: form.nombre !== undefined ? form.nombre : name,
    photoURL: photo,
  };
  const dataFirestore = {...form, imagenurl: photo};
  updateData(dataFirestore, dataUpdate);
};

const dataFunction = () => {
  const data = [
    {
      title: authfunc.getName(),
      Icon: userIcon,
      keyObj: 'nombre',
    },
    {
      title: 'Número',
      Icon: PhoneSVG,
      keyObj: 'phoneNumber',
    },
    {
      title: 'Ciudad',
      Icon: LocationPinSVG,
      keyObj: 'ciudad',
    },
  ];
  return data;
};

export default {createObject, dataFunction};
