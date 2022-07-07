import React from 'react';
import {View, Text} from 'react-native';
import NameAppSVG from '../../assets/icons/nameapp.svg';
import LogoRegisterSVG from '../../assets/icons/logoRegister.svg';
import Icons from '../../components/Icons';
import InputComponent from '../../components/InputComponent';
import UserSVG from '../../assets/icons/userIcon.svg';
import EmailSVG from '../../assets/icons/email.svg';
import PasswordSVG from '../../assets/icons/password.svg';
import Term from '../../components/Term';
import ButtonsForInit from '../../components/ButtonsForInit';
import BottomText from '../../components/BottomText';
import styles from './styles';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoscontainer}>
        <View style={styles.logosdireccion}>
          <Icons IconProp={NameAppSVG} style={styles.namecontainer} />
          <Icons IconProp={LogoRegisterSVG} style={styles.logocontainer} />
        </View>
      </View>
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
        <ButtonsForInit />
        <BottomText text={'¿Ya tienes una cuenta?'} />
      </View>
    </View>
  );
}
