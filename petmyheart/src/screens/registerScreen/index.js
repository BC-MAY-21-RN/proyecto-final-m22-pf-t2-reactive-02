import React from 'react';
import {View, Text} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoSVG from '../../assets/icons/logo.svg';
import Icons from '../../components/icons/styles';
import InputComponent from '../../components/InputComponent';
import UserSVG from '../../assets/icons/userIcon.svg';
import EmailSVG from '../../assets/icons/email.svg';
import PasswordSVG from '../../assets/icons/password.svg';
import Term from '../../components/Term';
import styles from './styles';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Icons IconProp={NameAppSVG} style={styles.namecontainer} />
      <Icons IconProp={LogoSVG} style={styles.logocontainer} />
      <View style={styles.formcontainer}>
        <Text style={styles.text}>REGISTRO</Text>
        <InputComponent title={'Nombre de usuario'} Icon={UserSVG} />
        <InputComponent title={'E-mail'} Icon={EmailSVG} />
        <InputComponent
          title={'Contraseña'}
          Icon={PasswordSVG}
          visibleIcon={true}
        />
        <InputComponent
          title={'Repetir contraseña'}
          Icon={PasswordSVG}
          visibleIcon={true}
        />
        <Term text={'Acepto todos los terminos y condiciones'} />
      </View>
    </View>
  );
}
