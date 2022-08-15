import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import InputConfiguration from '../../atoms/inputConfiguration';
import EmailSVG from '../../../assets/icons/mail.svg';
import PhoneSVG from '../../../assets/icons/phone.svg';
import LocationPinSVG from '../../../assets/icons/location_pin.svg';
import LocationSVG from '../../../assets/icons/location.svg';
import EditSVG from '../../../assets/icons/create.svg';
import AddSVG from '../../../assets/icons/arrow.svg';

export default function ConfigurationContent() {
  const user = auth().currentUser;
  return (
    <View style={styles.container}>
      <InputConfiguration
        title={user.email}
        Icon={EmailSVG}
        visibleIcon={true}
        ChangeIcon={EditSVG}
      />
      <InputConfiguration
        title={'+52'}
        Icon={PhoneSVG}
        visibleIcon={true}
        ChangeIcon={EditSVG}
      />
      <InputConfiguration
        title={'Ciudad'}
        Icon={LocationPinSVG}
        visibleIcon={true}
        ChangeIcon={EditSVG}
      />
      <InputConfiguration
        title={'Agregar ubicación'}
        Icon={LocationSVG}
        visibleIcon={true}
        ChangeIcon={AddSVG}
      />
      <TouchableOpacity style={styles.guardar}>
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
